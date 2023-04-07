import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Grandpa from './components/Grandpa';
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Layout></Layout>
      },
      {
        path: 'grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
