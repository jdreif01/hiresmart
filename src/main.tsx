import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-west-2_BNtjQWLSQ',
      userPoolClientId: '1ivfc9qcdm43j9286fq0fure85',
      //region: 'us-west-2',
      loginWith: {
        oauth: {
          domain: 'us-west-2bntjqwlsq.auth.us-west-2.amazoncognito.com',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: ['http://localhost:5173/organization-list', 'https://main.d2jtzratdb8oor.amplifyapp.com/organization-list'],
          redirectSignOut: ['http://localhost:5173/organization-list', 'https://main.d2jtzratdb8oor.amplifyapp.com/organization-list'],
          responseType: 'code',
          providers: ['Google']
        }
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);