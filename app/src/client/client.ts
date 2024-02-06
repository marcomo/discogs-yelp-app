import { QueryClient } from '@tanstack/react-query'
import { YelpResponse } from '../types'
import { GraphQLJsonRequestBody, GraphQLVariables } from 'msw'
export const queryClient = new QueryClient()

type GraphQLJsonHttpPostRequestBody =
	GraphQLJsonRequestBody<GraphQLVariables> & {
		operationName?: string
	}

const headers = {
	'Content-Type': 'application/json',
	'Accept-Language': 'en_US',
	// only for vite dev
	Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
}

/**
 * GraphQL query over HTTP fetch
 *
 * @param {GraphQLJsonHttpPostRequestBody} body  - Standard body for GraphQL http POST
 *
 * @returns {object|Error} A promise that resolves to a data object or rejects with an Error
 */
export const queryFetch =
	<Data extends object>(body: GraphQLJsonHttpPostRequestBody) =>
	async () => {
		const response = await fetch('/graphql', {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		})
		const { data, errors } = (await response.json()) as YelpResponse<Data>
		if (response.ok) {
			if (data) {
				return data
			} else {
				return Promise.reject(new Error('No response.'))
			}
		} else {
			// What if there are multiple errors?
			const error = Error(errors?.[0]?.message ?? 'Caught: Unknown error.')
			return Promise.reject(error)
		}
	}
