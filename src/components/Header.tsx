import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

interface HeaderProps {
  title: string;
}

const StyledHeader = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2)
}));

export function Header({ title }: HeaderProps) {
  return (
    <StyledHeader>
      <Typography sx={{ typography: { sm: 'h4', xs: 'h6' } }}>
        {title}
      </Typography>
    </StyledHeader>
  );
}
