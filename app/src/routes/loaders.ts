import { LoaderFunction } from 'react-router-dom'
import { queryFetch } from '../client/client'
import { FavoritesQuery } from '../queries/Favorites'
import { FavoritesResponse, ReviewsResponse } from '../types'
import { QueryKey } from '@tanstack/react-query'
import { BusinessQuery } from '../queries/Business'

export const rootLoader: (queryKey: QueryKey) => LoaderFunction = (queryKey) => async () => {
  const favorites = await queryFetch<FavoritesResponse>(FavoritesQuery, queryKey)
  const out = Object.values(favorites).reduce((prev, next) => {
    return {
      [next.id]: next,
      ...prev
    }
  }, {})
  return { favorites: out }
}

export const businessLoader: LoaderFunction = async ({ params }) => {
  // TODO: What happens of the params id is empty?
  return await queryFetch<ReviewsResponse>(BusinessQuery(params?.id ?? ""), ["favs", params.id, "reviews"])
}