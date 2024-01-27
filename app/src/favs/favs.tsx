import React from 'react'
import ReactDOM from 'react-dom/client'
import '../App.css'
import '../index.css'
export function Favorites() {
  return (
    <>
      <h1>Favorites</h1>
      <div className="card">
        <p>
          Edit <code>src/favs.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Favorites />
  </React.StrictMode>,
)
