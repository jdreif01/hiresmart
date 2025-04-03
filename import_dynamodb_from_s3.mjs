import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { DynamoDBClient, BatchWriteItemCommand } from '@aws-sdk/client-dynamodb';

const s3Client = new S3Client({ region: 'us-west-2' });
const dynamoDBClient = new DynamoDBClient({ region: 'us-west-2' });

const TABLE_NAME = 'HireSmartItem-nekyinmpwbbefkx435oxrkzkmu-NONE'; // Replace with your table name
const S3_BUCKET = 'hiresmart-test-data-bucket';
const S3_KEY = 'hiresmart_test_data_dynamodb.json';

async function importData() {
  try {
    // Step 1: Read the JSON file from S3
    const getObjectCommand = new GetObjectCommand({
      Bucket: S3_BUCKET,
      Key: S3_KEY
    });
    const { Body } = await s3Client.send(getObjectCommand);
    const data = await streamToString(Body);
    const items = JSON.parse(data);

    // Step 2: Process items in batches of 25 (DynamoDB batchWriteItem limit)
    const batches = [];
    const BATCH_SIZE = 25;
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      batches.push(items.slice(i, i + BATCH_SIZE));
    }

    console.log(`Total batches to process: ${batches.length}`);

    // Step 3: Write each batch to DynamoDB
    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
      const params = {
        RequestItems: {
          [TABLE_NAME]: batch.map(item => ({
            PutRequest: {
              Item: item
            }
          }))
        }
      };

      const batchWriteCommand = new BatchWriteItemCommand(params);
      await dynamoDBClient.send(batchWriteCommand);
      console.log(`Successfully wrote batch ${batchIndex + 1}/${batches.length}`);
    }

    console.log('All items imported successfully.');
  } catch (error) {
    console.error('Error importing data:', error);
    throw error;
  }
}

// Helper function to convert S3 stream to string
async function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  });
}

// Run the import
importData();
