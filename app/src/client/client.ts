import { QueryClient, QueryKey } from "@tanstack/react-query"
export const queryClient = new QueryClient()

export const queryFetch = async <Data extends object>(query: string, queryKey: QueryKey): Promise<Data> => {
  const response = await queryClient.fetchQuery({
    queryFn: async () => {
      return await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': 'en_US',
          // only for vite dev
          'Authorization': `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
        },
        body: JSON.stringify({ query })
      })
    },
    queryKey,
    // recheck every 5 minutes
    staleTime: 1000 * 60 * 5
  })
  // clone response as it may be be the cached promise
  const { data, error } = await response.clone().json()
  if (response.ok) {
    if (data) {
      return data
    } else {
      return Promise.reject("No response.")
    }
  } else {
    return Promise.reject(new Error(error?.message ?? 'Unknown error.'))
  }
}