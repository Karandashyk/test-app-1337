import React from 'react';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container
      sx={{
        p: 2,
        maxWidth: 'lg',
        minHeight: '100vh'
      }}
    >
      {children}
    </Container>
  );
}
