export type Review = {
  id: string
  rating: number
  user: {
    name: string
  }
  text: string
  time_created: string
  url: string
}

export type Business = {
  id: string
  location?: {
    address1: string
    address2?: string
    address3?: string
  }
  city: string
  country: string
  latitude?: number
  limit?: number
  longitude?: number
  name: string
  phone?: string
  display_phone?: string
  postal_code?: string
  state: string
  reviews?: Review[]
  review_count?: number
  rating?: number
  photos?: string[]
  url?: string
  categories?: {
    title: string
  }[]
  price?: string
}

export type FavoritesResponse = Record<string, Business>
export type FavoritesData = {
  favorites: FavoritesResponse
}
export type ReviewsResponse = {
  reviews: {
    total: number
    review: Review[]
  }
}
