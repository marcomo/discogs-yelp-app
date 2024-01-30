import { FunctionComponent } from 'react'
import {
	ErrorResponse,
	isRouteErrorResponse,
	useRouteError,
} from 'react-router-dom'

type ErrorType = Error | ErrorResponse | null

const Error: FunctionComponent = () => {
	const error: ErrorType = useRouteError() as ErrorType
	console.error(error)

	return (
		<div id='error-page' className='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{error ? (
				<p>
					<i>
						{isRouteErrorResponse(error)
							? error.statusText
							: error instanceof Error
							? error.message
							: 'Unknown error'}
					</i>
				</p>
			) : null}
		</div>
	)
}

export default Error
