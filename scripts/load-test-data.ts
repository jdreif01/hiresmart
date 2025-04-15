// scripts/load-test-data.ts
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, BatchWriteCommand } from '@aws-sdk/lib-dynamodb';
import { fromNodeProviderChain } from '@aws-sdk/credential-providers';
import * as fs from 'fs/promises';
import * as path from 'path';

// Define the models and their corresponding JSON files
const models = [
  { name: 'GlobalRole', file: 'globalrole_dev_import.json' },
  { name: 'Organization', file: 'organization_dev_import.json' },
  { name: 'Candidate', file: 'candidate_dev_import.json' },
  { name: 'Role', file: 'role_dev_import.json' },
  { name: 'Position', file: 'position_dev_import.json' },
];

// Interface for the JSON data structure
interface TestData {
  [tableName: string]: Array<{
    PutRequest: {
      Item: Record<string, { S?: string; SS?: string[]; N?: string; M?: Record<string, any> }>;
    };
  }>;
}

// Interface for the table suffixes configuration
interface TableSuffixes {
  [environment: string]: string;
}

// Load the table suffixes configuration
async function loadTableSuffixes(): Promise<TableSuffixes> {
  const configPath = path.join(process.cwd(), 'test-data', 'table-suffixes.json');
  try {
    const rawData = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(rawData) as TableSuffixes;
  } catch (error) {
    // Cast error to Error to safely access .message
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to load table suffixes configuration from ${configPath}: ${errorMessage}`);
  }
}

// Function to fetch DynamoDB table names for the given environment
async function getDynamoDbTableNames(environment: string): Promise<Record<string, string>> {
  try {
    // Load table suffixes configuration
    const tableSuffixes = await loadTableSuffixes();
    const tableSuffix = tableSuffixes[environment];
    if (!tableSuffix || tableSuffix === 'unknown') {
      throw new Error(
        `Table suffix for environment "${environment}" is not configured or is set to "unknown". Please update test-data/table-suffixes.json with the correct suffix for this environment.`
      );
    }

    // Initialize DynamoDB client with the sandbox profile
    const credentials = fromNodeProviderChain({
      profile: process.env.AWS_PROFILE || undefined, // Use the profile set by npx ampx sandbox
    });
    const dynamoDbClient = new DynamoDBClient({
      region: process.env.AWS_REGION || 'us-west-2', // Use us-west-2 as the region
      credentials,
    });

    // List all DynamoDB tables
    const listTablesCommand = new ListTablesCommand({});
    const listTablesResponse = await dynamoDbClient.send(listTablesCommand);
    const tableNamesList = listTablesResponse.TableNames || [];

    // Map model names to their corresponding table names
    const tableNames: Record<string, string> = {};

    // Match tables by model name and environment-specific suffix
    for (const tableName of tableNamesList) {
      const shouldInclude = tableName.includes(tableSuffix);
      if (shouldInclude) {
        // Match the table name to a model
        for (const model of models) {
          if (tableName.includes(model.name)) {
            // Ensure only one table per model is matched
            if (tableNames[model.name]) {
              throw new Error(
                `Multiple tables found for model "${model.name}" in environment "${environment}": "${tableNames[model.name]}" and "${tableName}". Please ensure table suffixes in test-data/table-suffixes.json are unique per environment.`
              );
            }
            tableNames[model.name] = tableName;
            break;
          }
        }
      }
    }

    // Verify that all models have a corresponding table
    for (const model of models) {
      if (!tableNames[model.name]) {
        throw new Error(`Table for ${model.name} in environment ${environment} not found`);
      }
    }

    return tableNames;
  } catch (error) {
    console.error('Error fetching DynamoDB table names:', error);
    throw error;
  }
}

// Function to load test data from JSON files and write to DynamoDB
async function loadTestData(environment: string) {
  // Initialize DynamoDB client with the sandbox profile
  const credentials = fromNodeProviderChain({
    profile: process.env.AWS_PROFILE || undefined, // Use the profile set by npx ampx sandbox
  });
  const dynamoDbClient = new DynamoDBClient({
    region: process.env.AWS_REGION || 'us-west-2', // Use us-west-2 as the region
    credentials,
  });
  const docClient = DynamoDBDocumentClient.from(dynamoDbClient);

  // Get the current table names
  const tableNames = await getDynamoDbTableNames(environment);
  console.log('DynamoDB Table Names:', tableNames);

  // Process each model
  for (const model of models) {
    const tableName = tableNames[model.name];
    if (!tableName) {
      console.error(`Table name for ${model.name} not found. Skipping...`);
      continue;
    }

    // Read the test data JSON file
    const filePath = path.join(process.cwd(), 'test-data', model.file); // Adjust path as needed
    let rawData: string;
    try {
      rawData = await fs.readFile(filePath, 'utf-8');
    } catch (error) {
      console.error(`Test data file ${model.file} not found. Skipping...`, error);
      continue;
    }

    const testData: TestData = JSON.parse(rawData);

    // Extract the items from the JSON (removing the hardcoded table name)
    const itemsKey = Object.keys(testData)[0]; // e.g., "GlobalRole-dbitjom5onf25no3k7zg6s4dma-NONE"
    const items = testData[itemsKey];

    // Convert items to DynamoDB format (remove the AWS-specific types like S, SS, etc.)
    const putRequests = items.map((item) => {
      const dynamoItem: Record<string, any> = {};
      for (const [key, value] of Object.entries(item.PutRequest.Item)) {
        if ('S' in value) {
          dynamoItem[key] = value.S;
        } else if ('SS' in value) {
          dynamoItem[key] = value.SS;
        } else if ('N' in value) {
          dynamoItem[key] = Number(value.N);
        } else if ('M' in value) {
          dynamoItem[key] = value.M;
        }
      }
      return { PutRequest: { Item: dynamoItem } };
    });

    // Batch write items to DynamoDB
    const batchSize = 25; // DynamoDB BatchWriteItem limit
    for (let i = 0; i < putRequests.length; i += batchSize) {
      const batch = putRequests.slice(i, i + batchSize);
      const command = new BatchWriteCommand({
        RequestItems: {
          [tableName]: batch,
        },
      });

      try {
        await docClient.send(command);
        console.log(`Successfully loaded batch ${i / batchSize + 1} for ${model.name} into table ${tableName}`);
      } catch (error) {
        console.error(`Error loading batch ${i / batchSize + 1} for ${model.name} into table ${tableName}:`, error);
      }
    }
  }
}

// Main function to run the script
async function main() {
  const environment = process.argv[2] || 'dev'; // Default to 'dev' if not specified
  console.log(`Loading test data for environment: ${environment}`);

  try {
    await loadTestData(environment);
    console.log('Test data loading completed successfully.');
  } catch (error) {
    console.error('Test data loading failed:', error);
    process.exit(1);
  }
}

main();