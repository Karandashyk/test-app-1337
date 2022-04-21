import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface ErrorNoticeProps {
  title: string;
  subtitle: string;
  text?: string;
  actions?: React.ReactElement<typeof Button>;
}

export function ErrorNotice({
  title,
  subtitle,
  text,
  actions
}: ErrorNoticeProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} role="alert">
      <Typography variant="h1" component="div">
        {title}
      </Typography>
      <Typography variant="h4" component="div">
        {subtitle}
      </Typography>
      <Typography variant="body1">{text}</Typography>
      {actions}
    </Box>
  );
}
