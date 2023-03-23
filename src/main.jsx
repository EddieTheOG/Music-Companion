import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import RouteGuard from './components/Routeguard'
import './index.css'
import ScalarDegreesPage from './ScalarDegrees/ScalarDegreesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard component={App}/>,
  },
  {
    path: "/scalar-degrees",
    element: <ScalarDegreesPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
