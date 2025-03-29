const { Auth } = require('aws-amplify');
const amplifyConfig = require('./amplifyconfiguration.json');

// Configure Amplify with the sandbox configuration
Auth.configure(amplifyConfig);

async function signInAndGetToken() {
  try {
    // Sign in the user
    const user = await Auth.signIn('alice@flatironsequity.com');
    console.log('User signed in:', user);

    // If using Google SSO, you may need to handle the federated sign-in flow
    // For simplicity, assuming username/password flow for now
    // If Google SSO is required, you'll need to use Auth.federatedSignIn({ provider: 'Google' })

    // Get the JWT token
    const session = await Auth.currentSession();
    const idToken = session.getIdToken().getJwtToken();
    console.log('JWT Token:', idToken);
  } catch (error) {
    console.error('Error signing in:', error);
  }
}

signInAndGetToken();