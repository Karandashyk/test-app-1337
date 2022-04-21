import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@mui/material/CssBaseline';
import { Fallback } from '@pages';
import { RouterFactory } from '@components';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={Fallback}>
        <RouterFactory />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
