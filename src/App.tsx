import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '@routes';
import { RouterFactory } from '@components';

import './App.css';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <RouterFactory />
    </ErrorBoundary>
  );
}

export default App;
