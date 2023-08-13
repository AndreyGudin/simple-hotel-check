import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './app/providers/StoreProvider';
import { HashRouter } from 'react-router-dom';

import App from './app/App';

import './app/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HashRouter>
  </React.StrictMode>
);
