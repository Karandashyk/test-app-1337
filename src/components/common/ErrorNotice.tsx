import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

interface ErrorNoticeProps {
  title: string;
  subtitle?: string;
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
    <Stack role="alert">
      <Typography variant="h4" component="div">
        {title}
      </Typography>
      <Typography variant="h6" component="div">
        {subtitle}
      </Typography>
      <Typography variant="body1">{text}</Typography>
      {actions}
    </Stack>
  );
}
