import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Employee } from '@types';

interface EmployeeCardProps {
  employee: Employee;
}

const StyledEmployeeCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1)
}));

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <StyledEmployeeCard>
      <CardMedia
        component="img"
        height="200"
        src={employee.imagePortraitUrl || '/default.jpg'}
        alt="employee photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee.office}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="share">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <TwitterIcon />
        </IconButton>
      </CardActions>
    </StyledEmployeeCard>
  );
}
