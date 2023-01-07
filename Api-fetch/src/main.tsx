import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './bootstrap.css'; //download using latest cdn link bootstrap docs

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
