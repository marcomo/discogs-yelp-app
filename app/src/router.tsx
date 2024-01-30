import { createBrowserRouter } from 'react-router-dom'

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

export default router
