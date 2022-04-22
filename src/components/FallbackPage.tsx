import React from 'react';
import { Container } from '@mui/material';

interface FallbackPageProps {
  error: Error;
}

export function FallbackPage({ error }: FallbackPageProps) {
  return (
    <Container>
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
    </Container>
  );
}
