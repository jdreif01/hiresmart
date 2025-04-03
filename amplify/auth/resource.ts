import { defineAuth, secret } from '@aws-amplify/backend';
import { setTenantIdPostAuth } from '../functions/resource';

const environment = process.env.AMPLIFY_ENV || 'dev';

const redirectUris = {
  dev: ['http://localhost:5173/organization-list'],
  staging: ['https://staging.dj6n7azsb427c.amplifyapp.com/organization-list'],
  prod: ['https://main.d31vtilon76l6i.amplifyapp.com/organization-list/']
};

console.log('AMPLIFY_ENV:', process.env.AMPLIFY_ENV, 'Environment:', environment); // Debug log

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
        scopes: ['email', 'profile', 'openid'],
        attributeMapping: {
          email: 'email',
          givenName: 'given_name',
          familyName: 'family_name',
          profilePicture: 'picture'
        }
      },
      callbackUrls: redirectUris[environment as keyof typeof redirectUris],
      logoutUrls: redirectUris[environment as keyof typeof redirectUris]
    }
  },
  userAttributes: {
    "custom:tenantId": {
      dataType: "String",
      mutable: true
    }
  },
  triggers: {
    postConfirmation: setTenantIdPostAuth
  },
  access: (allow) => [
    allow.resource(setTenantIdPostAuth).to(['manageUsers'])
  ]
});