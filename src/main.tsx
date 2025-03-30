import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyOutputsDev from '../amplify_outputs.json'; // Use ES Module import for dev

// Use window.amplify_outputs if available (in hosted environments like staging, production)
// Otherwise, fall back to the imported amplify_outputs.json for dev (sandbox)
const amplifyOutputs = window.amplify_outputs || amplifyOutputsDev;

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