import { FunctionComponent } from 'react'

const StarRating: FunctionComponent<{ rating: number }> = ({ rating }) => {
  const half = rating % 1
  return <span className="star-rating">
    {Array.from(Array(Math.floor(rating))).map((_, index) => {
      return <span key={`fav-detail-star-${index}`} className="full-star">★</span>
    })}
    <span className="half-star">{half ? '☆' : null}</span>
  </span>
}

export default StarRating