import React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

export const StyledLayout = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1)
}));

export function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout maxWidth="lg">
      <main>{children}</main>
    </StyledLayout>
  );
}
