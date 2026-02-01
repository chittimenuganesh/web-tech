import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ShadowLogProvider } from "./context/ShadowLogContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShadowLogProvider>
      <App />
    </ShadowLogProvider>
  </StrictMode>,
)



