import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import { businessLoader, rootLoader } from './routes/loaders'
import Home from './components/Home'
import { Favorite } from './routes/Favorite'

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
      },
      {
        children: [
          {
            path: "favs/:id",
            id: "fav",
            element: <Favorite />,
            loader: businessLoader
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)