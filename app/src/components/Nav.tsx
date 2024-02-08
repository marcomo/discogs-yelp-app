import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

import { FavoritesResponse } from '../types'

const Nav: FunctionComponent = () => {
	const data = useLoaderData() as FavoritesResponse

	return data ? (
		<nav className='nav'>
			<ul className='list'>
				{Object.values(data).map((fav) => (
					<li className='list-item' key={fav.id}>
						<NavLink
							className={({ isActive, isPending }) => {
								return classNames('link', {
									'nav__nav-item-active': isActive,
									'nav__nav-item-pending': isPending,
								})
							}}
							to={`/favs/${fav.alias}`}
						>
							{fav.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	) : null
}

export default Nav
