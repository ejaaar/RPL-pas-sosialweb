import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SocialProvider } from './context/SocialContext';
import { ThemeProvider } from './context/ThemeContext'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SocialProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SocialProvider>
  </React.StrictMode>
);