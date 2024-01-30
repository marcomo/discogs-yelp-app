import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/Root"
import { rootLoader } from './routes/loaders'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader(['/']),
    shouldRevalidate: () => false,
    id: "root"
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)