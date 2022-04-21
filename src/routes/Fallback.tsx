import React from 'react';

interface FallbackPageProps {
  error: Error;
}

export function Fallback({ error }: FallbackPageProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
