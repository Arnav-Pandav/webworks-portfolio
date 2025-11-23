
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './theme/ThemeProvider.jsx'; // ✅ import your provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>   {/* ✅ Wrap your entire app */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
