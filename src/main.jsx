import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import RouteGuard from './components/Routeguard';
import './index.css';
import LoginPage from './LoginPage/LoginPage';
import ConfirmationPage from './RegisterPage/ConfirmationPage';
import RegisterPage from './RegisterPage/RegisterPage';
import ScalarDegreesPage from './ScalarDegrees/ScalarDegreesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteGuard component={App} />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/confirmation',
    element: <RouteGuard component={ConfirmationPage} />
  },
  {
    path: '/exercises',
    element: <RouteGuard component={App} />,
    children: [
      {
        path: '/exercises/scalar-degrees',
        element: <ScalarDegreesPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
