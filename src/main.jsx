/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material';
import theme from './core/theme.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css';

import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Links from './features/links/Links';
import ProtectedRoute from './core/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: 'login',
    element: (
      <ProtectedRoute isPublicOnly>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: 'register',
    element: (
      <ProtectedRoute isPublicOnly>
        <Register />
      </ProtectedRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Links />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
