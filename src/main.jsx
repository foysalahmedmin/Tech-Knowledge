import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import BlogQ from './components/BlogQ/BlogQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ansQuestions",
    element: <BlogQ />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
