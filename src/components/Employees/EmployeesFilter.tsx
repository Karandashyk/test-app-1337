import React from 'react';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface EmployeesFilterProps {
  searchQuery: string;
  onQueryChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export function EmployeesFilter({
  searchQuery,
  onQueryChange
}: EmployeesFilterProps) {
  return (
    <FormControl variant="outlined">
      <OutlinedInput
        type="text"
        aria-label="employee-filter-input"
        value={searchQuery}
        placeholder="Filter by name or office"
        onChange={onQueryChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
