import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	fallBackComponent: ReactNode;
	children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return this.props.fallBackComponent;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
