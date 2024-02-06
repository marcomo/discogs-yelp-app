import { FunctionComponent, PropsWithChildren } from 'react'
import { Link, Outlet } from 'react-router-dom'

import ErrorBoundary from '../components/ErrorBoundary'
import Nav from '../components/Nav'
import yelpBurst from '../assets/yelp_burst.svg'

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
	return (
		// {/* ErrorBoundary is fallback for errors uncaught by react-router-dom */}
		<ErrorBoundary>
			<aside className='sidebar sidebar-separated sidebar-left'>
				<Link to='/'>
					<h1 className='logo'>
						<img src={yelpBurst} alt='Yelp logo' width={25} />
						<span>Yelp Favorites</span>
					</h1>
				</Link>
				<Nav />
			</aside>
			<section className='detail'>{children || <Outlet />}</section>
		</ErrorBoundary>
	)
}

export default Layout
