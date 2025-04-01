import { defineAuth, secret } from '@aws-amplify/backend';

const environment = process.env.AMPLIFY_ENV || 'dev';

const redirectUris = {
  dev: ['http://localhost:5173/organization-list'],
  staging: ['https://staging.d31vtilon76l6i.amplifyapp.com/organization-list/'],
  prod: ['https://main.d31vtilon76l6i.amplifyapp.com/organization-list/']
};

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE'
    },
    phone: undefined,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile', 'openid'], // Use uppercase scopes
        attributeMapping: {
          email: 'email',
          givenName: 'given_name',
          familyName: 'family_name',
          profilePicture: 'picture'
        }
      },
      callbackUrls: redirectUris[environment as keyof typeof redirectUris],
      logoutUrls: redirectUris[environment as keyof typeof redirectUris],
      //scopes: ['email', 'profile', 'openid'] // Use uppercase scopes
    }
  }
});