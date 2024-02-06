import { FunctionComponent } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

/**
 * Renders an error wrapped in a layout for the Root component.
 *
 * @returns {ReactNode} A React element that renders an error message.
 */
const ErrorComponent: FunctionComponent<{ error?: unknown }> = (props) => {
	const error = useRouteError()

	return (
		<div id='error-page' className='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{props.error || error ? (
				<p>
					<i>
						{isRouteErrorResponse(error)
							? error.statusText
							: typeof error === 'string'
							? new Error(error).message
							: error?.constructor == Error
							? new Error(error).message
							: 'Unknown Error'}
					</i>
				</p>
			) : null}
		</div>
	)
}

export default ErrorComponent
