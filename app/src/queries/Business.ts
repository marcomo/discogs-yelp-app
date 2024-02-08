export const BUSINESS_QUERY_NAME = 'Business'
export const BusinessQuery = (id: string) => `
  query ${BUSINESS_QUERY_NAME} {
    business(id: "${id}") {
      name
      id
      url
      display_phone
      review_count
      rating
      photos
      price
      location {
          address1
      }
      reviews(limit: 5) {
          id
          rating
          text
          time_created
          url
          user {
            name
          }
      }
      categories {
        title
      }
    }
  }
`
