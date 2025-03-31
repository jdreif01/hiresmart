import { defineAuth } from '@aws-amplify/backend';

// Define environment-specific configurations
const environment = process.env.AMPLIFY_ENV || 'dev'; // Default to 'dev' for sandbox

// Define redirect URIs based on the environment
const redirectUris = {
  dev: ['http://localhost:5173/organization-list'],
  staging: ['https://staging.d31vtilon76l6i.amplifyapp.com/organization-list/'],
  prod: ['https://main.<app-id>.amplifyapp.com/organization-list/'] // Placeholder for production
};

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE'
    },
    externalProviders: {
      callbackUrls: redirectUris[environment as keyof typeof redirectUris],
      logoutUrls: redirectUris[environment as keyof typeof redirectUris],
      scopes: ['EMAIL', 'PROFILE', 'OPENID']
    }
  }
});
