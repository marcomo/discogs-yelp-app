import { FunctionComponent } from 'react'
import { useLoaderData } from 'react-router-dom'

import { Business } from '../types'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'

export const Favorite: FunctionComponent = () => {
	const { business: fav } = useLoaderData() as { business: Business }

	return fav ? (
		<div className='favorite'>
			<div className='favorite__info'>
				<img
					className='hero-img'
					key={fav.photos?.[0]}
					src={fav.photos?.[0]}
					alt={`Image of ${fav.name}`}
				/>
				<div className='favorite__data'>
					<div className='favorite__heading'>
						<h1 className='h1'>{fav.name}</h1>
						<a className='link-external' href={fav.url} target='_blank'>
							View on Yelp
						</a>
					</div>
					<p>{fav.location?.address1}</p>
					<p>Phone: {fav.display_phone}</p>
					<hr />
					<p>
						Total reviews:{' '}
						{(fav.review_count || -1) >= 0 ? fav.review_count : 0}
					</p>
					{fav.rating ? (
						<p>
							Rating: <StarRating rating={fav.rating} />
						</p>
					) : null}
					<p>
						Categories:{' '}
						{fav.categories?.map((category, index, array) => {
							return (
								<span key={`${category.title}-${index}`}>
									{category.title}
									{index < array.length - 1 ? ', ' : ''}
								</span>
							)
						})}
					</p>
					<p>Price: {fav.price}</p>
				</div>
			</div>
			<Reviews reviews={fav.reviews} />
		</div>
	) : null
}
