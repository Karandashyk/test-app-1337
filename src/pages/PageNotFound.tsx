import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ErrorNotice } from '@components';
import { PATH_ROOT } from '@constants';

export function PageNotFound() {
  return (
    <ErrorNotice
      title="Sorry"
      subtitle="Page not found"
      text="The page you are looking for was moved, removed, renamed or might have never existed."
      actions={
        <Button component={Link} to={PATH_ROOT}>
          Back to main page
        </Button>
      }
    />
  );
}
