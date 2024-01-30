const BusinessFields = (key: string, id: string) => `
  ${key}: business(id: "${id}") {
    ...basicBizInfo
  }
`
export const FavoritesQuery = `
    query MyFavorites {
      ${BusinessFields('yama', 'yama-sushi-and-sake-bar-portland-3')}
      ${BusinessFields('phoVan', 'pho-van-beaverton-beaverton-5')}
      ${BusinessFields('laughingPlanet', 'laughing-planet-portland-25')}
      ${BusinessFields('killerBurger', 'killer-burger-cedar-hills-beaverton-4')}
      ${BusinessFields('hotLips', 'hotlips-pizza-pearl-portland-2')}
      ${BusinessFields('nossaFamilia', 'nossa-familia-coffee-portland-3')}
      ${BusinessFields('lovejoyBakers', 'lovejoy-bakers-portland-2')}
      ${BusinessFields('sunitas', 'sunitas-thai-kitchen-portland')}
      ${BusinessFields('courier', 'courier-coffee-roasters-portland')}
  }
  fragment basicBizInfo on Business {
    name
    id
    photos
  }
`