import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ModeContextProvider} from './Context/ModeContext';
import {ModeChangingProvider} from './Context/ModeChangingContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModeContextProvider>
    <ModeChangingProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ModeChangingProvider>
  </ModeContextProvider>
);
