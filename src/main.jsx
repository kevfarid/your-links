/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material';
import theme from './core/theme.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css';

const Login = React.lazy(() => import('./features/auth/Login'));
const Register = React.lazy(() => import('./features/auth/Register'));

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
