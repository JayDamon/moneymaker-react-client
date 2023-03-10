import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DrawerProvider } from './contexts/drawer.context';
import { StyledEngineProvider } from '@mui/material';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './utils/keycloak.utils';
import { UserProvider } from './contexts/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <UserProvider>
            <DrawerProvider>
              <App />
            </DrawerProvider>
          </UserProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
