import { Link, Outlet } from 'react-router-dom'

import ErrorBoundary from '../components/ErrorBoundary'
import Nav from '../components/Nav'
import yelpBurst from '../assets/yelp_burst.svg'

export default function Root() {
	return (
		<>
			<aside className='sidebar sidebar-separated sidebar-left'>
				<Link to='/'>
					<h1 className='logo'>
						<img src={yelpBurst} alt='Yelp logo' width={25} />
						<span>Yelp Favorites</span>
					</h1>
				</Link>
				<Nav />
			</aside>
			<section className='detail'>
				<ErrorBoundary>
					<Outlet />
				</ErrorBoundary>
			</section>
		</>
	)
}
