import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import 'dread-ui/style.scss';
import './index.scss';
import 'home-page/style.scss';
import { AppSwitcherProvider } from './providers/app-switcher-context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomepageApp, HomepageProvider, IntroProvider } from 'home-page';

const router = createBrowserRouter([
  {
    path: '/*',
    element: (
      <AppSwitcherProvider>
        <IntroProvider>
          <HomepageProvider>
            <App />
          </HomepageProvider>
        </IntroProvider>
      </AppSwitcherProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
