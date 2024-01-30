import { Link, Outlet, useLoaderData } from 'react-router-dom'
import { FavoritesData } from '../types'

export default function Root() {
  const { favorites } = useLoaderData() as FavoritesData

  return (
    <>
      <aside>
        <Link to="/">
          <h1 className="logo">
            <span>Yelp Favorites</span>
          </h1>
        </Link>
        <nav className="nav">
          <ul className="list">
            {
              Object.values(favorites).map(fav => (
                <li className="list-item" key={fav.id}>
                  <Link className="link" to={`/favs/${fav.id}`}>{fav.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
      <section className="detail">
        <Outlet />
      </section>
    </>
  );
}
