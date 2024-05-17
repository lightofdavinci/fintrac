import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.tsx';
import Enrollment from './pages/Enrollment.tsx';
import VerifyEmail from './pages/VerifyEmail.tsx';
import Dashboard from './pages/Dashboard.tsx';
import NotFound from './pages/NotFound.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/enrollment",
    element: <Enrollment />,
  },
  {
    path: "/verify-email/:token",
    element: <VerifyEmail />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
