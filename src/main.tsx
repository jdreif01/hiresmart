import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import App from './App';
import amplifyOutputs from '../amplify_outputs.json'; // Use ES Module import for dev

console.log('Amplify Outputs:', amplifyOutputs);
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