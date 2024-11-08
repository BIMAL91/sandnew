import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';  // Import your app.css file where Tailwind CSS directives are defined
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
