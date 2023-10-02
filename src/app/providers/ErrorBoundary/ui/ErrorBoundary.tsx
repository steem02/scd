import React, { type ErrorInfo, Suspense } from 'react';
import { PageError } from '@/widgets/PageError';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <Suspense>{<PageError /> ?? this.props.fallback}</Suspense>;
    }

    return this.props.children;
  }
}
