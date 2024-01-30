import { FunctionComponent } from 'react'
import { Review } from '../types'
import classNames from 'classnames'
import { queryClient } from '../client/client'
import { useParams, useRevalidator } from 'react-router-dom'
import StarRating from './StarRating'

const Reviews: FunctionComponent<{ reviews: Review[] | undefined }> = ({ reviews }) => {
  const { state, revalidate } = useRevalidator()
  const params = useParams()

  const refreshData = () => {
    queryClient.invalidateQueries({ queryKey: ["favs", params.id] })
    revalidate()
  }

  return (
    reviews ?
      <aside className="sidebar sidebar-separated sidebar-right favorite__reviews">
        <ul className="list card-list">
          {reviews.map(review => {
            return (
              <li className="list-item card card-quote" key={review.id} style={{ opacity: state === "loading" ? 0.5 : 1 }}>
                <p className="quote">{review.text}</p>
                <hr />
                <div className="review-details">
                  <p>{review.user.name}</p>
                  <p><StarRating rating={review.rating} /></p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="card-list__list-item">
          <button
            className={classNames("button-primary button-fluid", { "button-loading": state === "loading" })}
            onClick={refreshData}
          >
            {state === "loading" ? "loading..." : "Get latest reviews"}
          </button>
        </div>
      </aside> : null
  )
}

export default Reviews