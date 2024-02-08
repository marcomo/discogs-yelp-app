import { createBrowserRouter } from 'react-router-dom'

import Error from './components/Error'
import { Favorite } from './routes/Favorite'
import Home from './components/Home'
import Layout from './routes/Layout'
import { getFavorite, getFavorites } from './routes/loaders'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		loader: getFavorites,
		shouldRevalidate: () => false,
		id: 'root',
		errorElement: (
			<Layout>
				<Error />
			</Layout>
		),
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
						loader: getFavorite,
					},
				],
			},
		],
	},
])

export default router
