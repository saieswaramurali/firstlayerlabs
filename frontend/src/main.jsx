import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import App from './App.jsx';
import { UserProvider } from './contexts/UserContext.jsx'; // adjust path if different

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </HeroUIProvider>
  </StrictMode>
);
