import React, { Component, ErrorInfo, ReactNode } from 'react';
import ErrorDisplay from '@/src/components/ui/error-display';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorDisplay
            title="Something went wrong"
            message="I apologize for the inconvenience. Please try refreshing the page."
            actionText="Try again"
            onAction={() => this.setState({ hasError: false })}
          />
        )
      );
    }

    return this.props.children;
  }
}
