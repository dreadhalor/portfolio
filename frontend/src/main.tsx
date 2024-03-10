import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import 'dread-ui/style.scss';
import './index.scss';
import { AppSwitcherProvider } from './providers/app-switcher-context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IframeProvider } from 'dread-ui';

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <IframeProvider>
        <AppSwitcherProvider>
          <App />
        </AppSwitcherProvider>
      </IframeProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
