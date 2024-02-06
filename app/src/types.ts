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
	name: string
	alias: string
	display_phone?: string
	reviews: Review[]
	review_count?: number
	rating?: number
	photos?: string[]
	url?: string
	categories: {
		title: string
	}[]
	price: string | null
}

export type FavoritesResponse = Record<string, Business>
export type ReviewsResponse = {
	reviews: {
		total: number
		review: Review[]
	}
}
