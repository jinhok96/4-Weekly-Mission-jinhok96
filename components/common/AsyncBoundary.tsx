import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface AsyncBoundaryProps {
  errorFallback?: React.ReactElement<unknown, string | typeof React.Component | React.FunctionComponent> | null;
  loadingFallback?: React.ReactNode;
  children: React.ReactNode;
}

export default function AsyncBoundary({ errorFallback, loadingFallback, children }: AsyncBoundaryProps) {
  return (
    <ErrorBoundary fallback={errorFallback || <div />}>
      <Suspense fallback={loadingFallback || <div />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
