import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './components/Student';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>
);

reportWebVitals();
