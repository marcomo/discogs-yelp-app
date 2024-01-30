import Error from './Error'
import { Component, ErrorInfo, PropsWithChildren } from 'react'

class ErrorBoundary extends Component<
	PropsWithChildren,
	{ hasError: boolean }
> {
	constructor(props: PropsWithChildren) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(_error: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return <Error />
		}

		return this.props.children
	}
}

export default ErrorBoundary
