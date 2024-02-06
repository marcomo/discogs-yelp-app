import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.scss'

const enableApiMocking = async () => {
	if (!import.meta.env.DEV) {
		return
	}
	const { worker } = await import('../mocks/browser')
	await import('./mockServiceWorker.js?worker')
	return await worker.start()
}

enableApiMocking().then(async () => {
	const router = await (await import('./router')).default
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)
})
