import { FavoritesResponse } from '../types'
import { FunctionComponent } from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom'

const Home: FunctionComponent = () => {
	const favorites = useRouteLoaderData('root') as FavoritesResponse
	return (
		<div className='home'>
			<h1>"These are few of my favorite things."</h1>
			<div className='card-grid'>
				{Object.values(favorites).map((fav) => {
					return (
						<Link
							to={`/favs/${fav.alias}`}
							key={`${fav.id}-card`}
							className='card card-3-col-sq card-photo'
							style={{
								backgroundImage: `url(${fav.photos?.[0]})`,
							}}
						>
							<div className='card-photo__label'>{fav.name}</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Home
