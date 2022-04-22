import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@mui/material/CssBaseline';
import { FallbackPage, RouterFactory } from '@components';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={FallbackPage}>
        <RouterFactory />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
