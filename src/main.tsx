import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyOutputs from '../amplify_outputs.json';

console.log('Amplify Outputs:', amplifyOutputs);
Amplify.configure(amplifyOutputs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);