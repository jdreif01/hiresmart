import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyOutputsDev from '../amplify_outputs.json'; // Use ES Module import for dev

// Wait for window.amplify_outputs to be available
const waitForAmplifyOutputs = async () => {
  if (window.location.hostname.includes('localhost')) {
    return amplifyOutputsDev;
  }

  for (let i = 0; i < 10; i++) {
    if (window.amplify_outputs) {
      return window.amplify_outputs;
    }
    await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
  }

  throw new Error('Amplify outputs not found after waiting. Ensure Amplify Hosting is correctly configured.');
};

// Configure Amplify with the outputs
waitForAmplifyOutputs().then(amplifyOutputs => {
  console.log('Amplify Outputs:', amplifyOutputs); // Debug log

  Amplify.configure(amplifyOutputs);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}).catch(error => {
  console.error(error);
});