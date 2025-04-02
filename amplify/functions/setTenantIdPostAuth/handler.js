import { CognitoIdentityServiceProvider } from '@aws-sdk/client-cognito-identity-provider';

const cognito = new CognitoIdentityServiceProvider();

export const handler = async (event) => {
  const { userPoolId, userName } = event;
  const email = event.request.userAttributes.email;

  // Extract tenantId from email domain
  let tenantId = 'foo'; // Default tenantId if domain extraction fails
  if (email && email.includes('@')) {
    const domain = email.split('@')[1]; // Get the domain part (e.g., gteg.com)
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