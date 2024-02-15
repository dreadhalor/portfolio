import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import 'dread-ui/style.scss';
import './index.scss';
import { AppSwitcherProvider } from './providers/app-switcher-context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppSwitcherProvider>
      <App />
    </AppSwitcherProvider>
  </React.StrictMode>,
);
