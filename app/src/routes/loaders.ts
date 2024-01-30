import { LoaderFunction } from 'react-router-dom'
import { queryFetch } from '../client/client'
import { FavoritesQuery } from '../queries/Favorites'
import { FavoritesResponse } from '../types'
import { QueryKey } from '@tanstack/react-query'

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