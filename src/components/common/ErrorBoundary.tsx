import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging in development mode only
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Uncaught error:', error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full glass-morphism rounded-3xl p-12 text-center visible">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-500/10 rounded-full flex items-center justify-center">
              <FaExclamationTriangle className="w-12 h-12 text-red-400" />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-white">
              Oops! Something went wrong
            </h1>

            <p className="text-muted text-lg mb-8">
              We encountered an unexpected error. Don't worry, your privacy is still protected.
              Try refreshing the page or go back home.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-secondary/50 border border-red-500/30 rounded-xl p-4 mb-8 text-left">
                <p className="text-red-400 font-mono text-sm break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="btn-primary px-8 py-4 inline-flex items-center gap-3 hover-scale"
              >
                <FaRedo />
                Try Again
              </button>

              <button
                onClick={this.handleGoHome}
                className="btn-secondary px-8 py-4 inline-flex items-center gap-3 hover-scale"
              >
                <FaHome />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
