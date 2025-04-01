import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyOutputsDev from '../amplify_outputs.json'; // Use ES Module import for dev

// Hardcoded fallback for staging (from amplify_outputs.json)
const stagingOutputs = {
  auth: {
    user_pool_id: "us-west-2_pzeiQht33",
    aws_region: "us-west-2",
    user_pool_client_id: "4tufq260uqd93kbi8b6807tmlu",
    identity_pool_id: "us-west-2:94b4b908-f2bd-4f00-bc09-901798ad8b41",
    mfa_methods: [],
    standard_required_attributes: ["email"],
    username_attributes: ["email"],
    user_verification_types: ["email"],
    groups: [],
    mfa_configuration: "NONE",
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_numbers: true,
      require_symbols: true,
      require_uppercase: true
    },
    oauth: {
      identity_providers: ["GOOGLE"],
      redirect_sign_in_uri: ["https://staging.d31vtilon76l6i.amplifyapp.com/organization-list/"],
      redirect_sign_out_uri: ["https://staging.d31vtilon76l6i.amplifyapp.com/organization-list/"],
      response_type: "code",
      scopes: ["email", "profile", "openid"],
      domain: "500a9aa6fcec4cc1a7de.auth.us-west-2.amazoncognito.com"
    },
    unauthenticated_identities_enabled: true
  },
  data: {
    url: "https://fzjkdcph45ds7e6gq2trpv24ba.appsync-api.us-west-2.amazonaws.com/graphql",
    aws_region: "us-west-2",
    default_authorization_type: "AMAZON_COGNITO_USER_POOLS",
    authorization_types: ["AWS_IAM"],
    model_introspection: amplifyOutputsDev.data.model_introspection // Use dev model introspection as a fallback
  },
  version: "1.3"
};

// Component to handle OAuth errors
const AuthErrorHandler = ({ children }) => {
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const error = queryParams.get('error');
    const errorDescription = queryParams.get('error_description');

    if (error) {
      setError(`${error}: ${errorDescription || 'Unknown error'}`);
    } else {
      setError(null);
    }
  }, [location]);

  if (error) {
    return <div style={{ color: 'red', padding: '20px' }}>Authentication Error: {error}</div>;
  }

  return children;
};

// Wait for window.amplify_outputs to be available
const waitForAmplifyOutputs = async () => {
  console.log('Waiting for window.amplify_outputs...');
  console.log('Current hostname:', window.location.hostname); // Debug hostname

  if (window.location.hostname.includes('localhost')) {
    console.log('Running in localhost, using amplify_outputs.json');
    return amplifyOutputsDev;
  }

  if (window.location.hostname.includes('staging')) {
    console.log('Running in staging, using hardcoded outputs as fallback');
    return stagingOutputs;
  }

  for (let i = 0; i < 50; i++) {
    if (window.amplify_outputs) {
      console.log('window.amplify_outputs found:', window.amplify_outputs);
      return window.amplify_outputs;
    }
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
  }

  console.error('window.amplify_outputs not found after 5 seconds');
  throw new Error('Amplify outputs not found after waiting. Ensure Amplify Hosting is correctly configured.');
};

// Configure Amplify with the outputs
waitForAmplifyOutputs().then(amplifyOutputs => {
  console.log('Amplify Outputs:', amplifyOutputs);

  Amplify.configure(amplifyOutputs);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Router>
        <AuthErrorHandler>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthErrorHandler>
      </Router>
    </React.StrictMode>
  );
}).catch(error => {
  console.error(error);
});