import { CognitoIdentityProvider } from '@aws-sdk/client-cognito-identity-provider';
import { PostConfirmationTriggerEvent } from 'aws-lambda';

console.log('Imported CognitoIdentityProvider:', CognitoIdentityProvider); // Debug log

const cognito = new CognitoIdentityProvider();

export const handler = async (event: PostConfirmationTriggerEvent) => {
  console.log('Lambda function invoked with event:', JSON.stringify(event, null, 2));

  const userPoolId: string = event.userPoolId;
  const userName: string = event.userName;
  const email: string = event.request.userAttributes.email;

  // Extract tenantId from email domain
  let tenantId: string = 'foo'; // Default tenantId if domain extraction fails (indicates an error)
  if (email && email.includes('@')) {
    const domain: string = email.split('@')[1]; // Get the domain part (e.g., gteg.com)
    if (domain && domain.includes('.')) {
      tenantId = domain.split('.')[0]; // Extract the tenantId (e.g., gteg)
    }
  }

  // Update the user's tenantId attribute
  const params = {
    UserPoolId: userPoolId,
    Username: userName,
    UserAttributes: [
      {
        Name: 'custom:tenantId',
        Value: tenantId
      }
    ]
  };

  try {
    await cognito.adminUpdateUserAttributes(params);
    console.log(`Set tenantId to ${tenantId} for user ${userName} with email ${email}`);
  } catch (error) {
    console.error(`Error setting tenantId for user ${userName}:`, error);
    throw error;
  }

  return event;
};