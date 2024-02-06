export const FAVORITES_QUERY_NAME = 'MyFavorites'
export const FavoritesQuery = `
  query ${FAVORITES_QUERY_NAME} {
  }
  fragment basicBizInfo on Business {
    name
    id
    photos
  }
`