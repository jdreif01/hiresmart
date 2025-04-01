import { defineAuth, secret } from '@aws-amplify/backend';

// Define environment-specific configurations
const environment = process.env.AMPLIFY_ENV || 'dev'; // Default to 'dev' for sandbox

// Define redirect URIs based on the environment
const redirectUris = {
  dev: ['http://localhost:5173/organization-list'],
  staging: ['https://staging.d31vtilon76l6i.amplifyapp.com/organization-list/'],
  prod: ['https://main.d31vtilon76l6i.amplifyapp.com/organization-list/']
};

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE' // Enable email login with verification code
    },
    phone: undefined, // Explicitly disable phone login
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        attributeMapping: {
          email: 'email',
          givenName: 'given_name',
          familyName: 'family_name',
          profilePicture: 'picture'
        }
      },
      callbackUrls: redirectUris[environment as keyof typeof redirectUris],
      logoutUrls: redirectUris[environment as keyof typeof redirectUris],
      scopes: ['EMAIL', 'PROFILE', 'OPENID']
    }
  }
});