import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import { SortField, SortOrder } from '@constants';
import { SortModel } from '@types';

interface EmployeesSortProps {
  sortModel: SortModel;
  onToggleSortField: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: SortField
  ) => void;
  onToggleSortOrder: () => void;
}

export function EmployeesSort({
  sortModel: { sortField, sortOrder },
  onToggleSortField,
  onToggleSortOrder
}: EmployeesSortProps) {
  return (
    <React.Fragment>
      <ToggleButtonGroup
        value={sortField}
        exclusive
        onChange={onToggleSortField}
        aria-label="employee-sort-field"
      >
        <ToggleButton value={SortField.NAME} aria-label="name-field">
          Name
        </ToggleButton>
        <ToggleButton value={SortField.OFFICE} aria-label="office-field">
          Office
        </ToggleButton>
      </ToggleButtonGroup>
      <IconButton
        color="default"
        aria-label="employee-sort-order"
        onClick={onToggleSortOrder}
        sx={{ width: '56px', ml: 1 }}
      >
        {sortOrder === SortOrder.ASC ? (
          <ArrowDownwardIcon />
        ) : (
          <ArrowUpwardIcon />
        )}
      </IconButton>
    </React.Fragment>
  );
}
