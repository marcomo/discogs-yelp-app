import Error from './Error'
import { Component, ErrorInfo, PropsWithChildren } from 'react'

class ErrorBoundary extends Component<
	PropsWithChildren,
	{
		hasError: boolean
		error?: Error
	}
> {
	constructor(props: PropsWithChildren) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <Error error={this.state.error} />
		}

		return <>{this.props.children}</>
	}
}

export default ErrorBoundary
