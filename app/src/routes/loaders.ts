import { BusinessQuery } from '../queries/Business'
import { FavoritesQuery } from '../queries/Favorites'
import { LoaderFunction } from 'react-router-dom'
import { queryFetch } from '../client/client'
import { QueryKey } from '@tanstack/react-query'
import { FavoritesResponse, ReviewsResponse } from '../types'

export const rootLoader: (queryKey: QueryKey) => LoaderFunction =
	(queryKey) => async () => {
		return await queryFetch<FavoritesResponse>(FavoritesQuery, queryKey)
	}

export const businessLoader: LoaderFunction = async ({ params }) => {
	// TODO: What happens of the params id is empty?
	return await queryFetch<ReviewsResponse>(BusinessQuery(params?.id ?? ''), [
		'favs',
		params.id,
		'reviews',
	])
}
