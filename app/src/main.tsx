import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.scss'

import Error from './components/Error'
import { Favorite } from './routes/Favorite'
import Home from './components/Home'
import Root from './routes/Root'
import { businessLoader, rootLoader } from './routes/loaders'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		loader: rootLoader(['/']),
		shouldRevalidate: () => false,
		id: 'root',
		errorElement: <Error />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				errorElement: <Error />,
				children: [
					{
						path: 'favs/:id',
						id: 'fav',
						element: <Favorite />,
						loader: businessLoader,
					},
				],
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
