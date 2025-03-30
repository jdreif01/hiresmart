import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';

// Use window.amplify_outputs if available (in hosted environments like staging, production)
// Otherwise, fall back to local amplify_outputs.json for dev (sandbox)
const amplifyOutputs = window.amplify_outputs || require('../amplify_outputs.json');

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