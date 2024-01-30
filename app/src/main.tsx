import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./routes/Root"
import { rootLoader } from './routes/loaders'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader(['/']),
    shouldRevalidate: () => false,
    id: "root",
    children: [
      {
        path: "",
        element: (<Home />)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)