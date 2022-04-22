import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Link
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Employee } from '@types';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@constants';

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const handleImgError = ({
    currentTarget
  }: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = currentTarget;
    target.onerror = null;
    target.src = '/default.jpg';
  };

  return (
    <Card
      sx={{
        padding: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardMedia
        component="img"
        src={employee.imagePortraitUrl || '/default.jpg'}
        alt="employee photo"
        onError={handleImgError}
        sx={{
          height: '200px',
          width: '100%'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee.office}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          marginTop: 'auto'
        }}
      >
        {employee.linkedIn && (
          <Link
            target="_blank"
            href={`${LINKEDIN_URL}${employee.linkedIn}`}
            rel="noreferrer"
          >
            <IconButton aria-label="linkedIn-link">
              <LinkedInIcon />
            </IconButton>
          </Link>
        )}
        {employee.gitHub && (
          <Link
            target="_blank"
            href={`${GITHUB_URL}${employee.gitHub}`}
            rel="noreferrer"
          >
            <IconButton aria-label="gitHub-link">
              <GitHubIcon />
            </IconButton>
          </Link>
        )}
        {employee.twitter && (
          <Link
            target="_blank"
            href={`${TWITTER_URL}${employee.twitter}`}
            rel="noreferrer"
          >
            <IconButton aria-label="twitter-link">
              <TwitterIcon />
            </IconButton>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
