import { BUSINESS_QUERY_NAME } from '../src/queries/Business'
import { FAVORITES_QUERY_NAME } from '../src/queries/Favorites'
import favoritesJSON from './favorites.json'
import { GraphQLError } from 'graphql'
import { graphql, http, HttpResponse, RequestHandler } from 'msw'

import { Business, FavoritesResponse } from '../src/types'

const data: FavoritesResponse = favoritesJSON

const error404 = [
	{
		error: 'Not Found.',
	},
	{ status: 404 },
]
export const handlers: RequestHandler[] = [
	// Query for root view, fetching multiple businesses, minimal fields
	graphql.query<FavoritesResponse>(FAVORITES_QUERY_NAME, () => {
		return HttpResponse.json({ data })
	}),
	// Query for business view, fetching a single business, many fields
	graphql.query<Business, { businessId: string }>(
		BUSINESS_QUERY_NAME,
		({ variables }) => {
			const business = data[variables.businessId]
			if (business) {
				return HttpResponse.json({
					data: business,
				})
			}
			return
		}
	),
	// Catch all unmatched graphql requests
	http.post('/graphql', () => {
		const error: Partial<GraphQLError> = { message: 'Query not found.' }
		return HttpResponse.json({ errors: [error] }, { status: 400 })
	}),
	// Catch all other requests
	http.post('/*', () => {
		return HttpResponse.json(...error404)
	}),
]
