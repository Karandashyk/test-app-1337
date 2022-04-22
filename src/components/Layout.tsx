import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const StyledLayout = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  minHeight: '100vh'
}));

export function Layout({ children }: LayoutProps) {
  return (
    <main>
      <StyledLayout maxWidth="lg">{children}</StyledLayout>
    </main>
  );
}
