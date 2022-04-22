import React from 'react';
import { IconButton, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { SortField, SortOrder } from '@constants';

interface EmployeesSortProps {
  sortModel: SortModel;
  onToggleSortField: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: SortField
  ) => void;
  onToggleSortOrder: () => void;
}

interface SortModel {
  sortField: SortField;
  sortOrder: SortOrder;
}

export function EmployeesSort({
  sortModel: { sortField, sortOrder },
  onToggleSortField,
  onToggleSortOrder
}: EmployeesSortProps) {
  return (
    <ToggleButtonGroup
      value={sortField}
      exclusive
      onChange={onToggleSortField}
      aria-label="employee-sort-param"
    >
      <ToggleButton value={SortField.NAME} aria-label="name-param">
        Name
      </ToggleButton>
      <ToggleButton value={SortField.OFFICE} aria-label="office-param">
        Office
      </ToggleButton>
      <IconButton
        color="default"
        aria-label="upload picture"
        component="span"
        onClick={onToggleSortOrder}
        sx={{ width: '56px', marginLeft: 1 }}
      >
        {sortOrder === SortOrder.ASC ? (
          <ArrowDownwardIcon />
        ) : (
          <ArrowUpwardIcon />
        )}
      </IconButton>
    </ToggleButtonGroup>
  );
}
