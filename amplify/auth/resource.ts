import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: 'CODE'
    },
    externalProviders: {
      callbackUrls: [
        'http://localhost:5173/organization-list',
        'https://main.d2jtzratdb8oor.amplifyapp.com/organization-list'
      ],
      logoutUrls: [
        'http://localhost:5173/organization-list',
        'https://main.d2jtzratdb8oor.amplifyapp.com/organization-list'
      ],
      scopes: ['EMAIL', 'PROFILE', 'OPENID']
    }
  }
});
