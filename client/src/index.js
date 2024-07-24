import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './Routes/About';
import Markets from './Routes/Markets';
import Pricing from './Routes/Pricing';
import Docs from './Routes/Docs';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Error occured.</h2>,
  },
  {
    path: "/about/",
    element: <About />,
  },
  {
    path: "/markets/",
    element: <Markets />,
  },
  {
    path: "/pricing/",
    element: <Pricing />,
  },
  {
    path: "/docs/",
    element: <Docs />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
