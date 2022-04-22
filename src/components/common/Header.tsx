import React from 'react';
import { Stack, Typography } from '@mui/material';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Stack
      sx={{
        mb: 2,
        p: 1,
        color: 'text.secondary'
      }}
    >
      <Typography sx={{ typography: { sm: 'h4', xs: 'h6' } }}>
        {title}
      </Typography>
    </Stack>
  );
}
