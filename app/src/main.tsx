import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.scss'
import router from './router'

const enableApiMocking = async () => {
	if (process.env.NODE_ENV !== 'development') {
		return
	}
	const { worker } = await import('../mocks/browser')
	await worker.start()
}

enableApiMocking().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
})
