import { FetchQueryOptions } from '@tanstack/react-query'
import { LoaderFunction, Params } from 'react-router-dom'

import { BusinessResponse } from '../types'
import toCamelCase from '../utils/toCamelCase'
import { BUSINESS_QUERY_NAME, BusinessQuery } from '../queries/Business'
import { FAVORITES_QUERY_NAME, FavoritesQuery } from '../queries/Favorites'
import { queryClient, queryFetch } from '../client/client'

// 5 minutes
const staleTime = 1000 * 60 * 5

/**
 * @type {FavsQuery} - A query options object for '/' route
 */
export const FavsQuery: FetchQueryOptions = {
	queryFn: queryFetch({
		query: FavoritesQuery,
		operationName: FAVORITES_QUERY_NAME,
	}),
	queryKey: ['/'],
	staleTime,
}

/**
 * Creates a query options object with dynamic params for /favs/:id route
 * 
 * @param {Params} params - Router params parsed from dynamic segments
 
* @returns {FetchQueryOptions} an object of options for fetchQuery
 */
export const FavQuery: (params: Params<'id'>) => FetchQueryOptions = (
	params
) => {
	return {
		queryFn: async () => {
			const response = await queryFetch<BusinessResponse>({
				query: BusinessQuery(params?.id ?? ''),
				variables: { businessId: toCamelCase(params.id ?? '') },
				operationName: BUSINESS_QUERY_NAME,
			})()
			if (response.business) {
				return response.business
			}
			return response
		},
		queryKey: ['favs', params.id],
		staleTime,
	}
}

/**
 * Fetches Yelp Businesses
 * @returns { FavoritesResponse|Error } A promise that resolves to an object of Businesses or rejects with an Error
 */
export const getFavorites: LoaderFunction = async () => {
	return await queryClient.fetchQuery(FavsQuery)
}

/**
 * Fetches a Yelp Business
 * @returns { Business|Error } A promise that resolves to a Business object or rejects with an Error
 */
export const getFavorite: LoaderFunction = async ({ params }) => {
	// TODO: What happens if the params id is empty?
	return await queryClient.fetchQuery(FavQuery(params))
}
