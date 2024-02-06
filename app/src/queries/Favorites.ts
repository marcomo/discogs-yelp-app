import toCamelCase from '../utils/toCamelCase'

const businesses = [
	'yama-sushi-and-sake-bar-portland-3',
	'pho-van-beaverton-beaverton-5',
	'laughing-planet-portland-25',
	'killer-burger-cedar-hills-beaverton-4',
	'lovejoy-bakers-portland-2',
	'sunitas-thai-kitchen-portland',
	'courier-coffee-roasters-portland',
]
export const FAVORITES_QUERY_NAME = 'MyFavorites'
export const FavoritesQuery = `
  query ${FAVORITES_QUERY_NAME} {
    ${businesses.map(
			(biz) => `
        ${toCamelCase(biz)}: business(id: "${biz}") {
            ...basicBizInfo
        }
      `
		)}
  }
  fragment basicBizInfo on Business {
    name
    id
    alias
    photos
  }
`
