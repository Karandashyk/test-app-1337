import React, { useState } from 'react';
import { Grid, LinearProgress, Stack } from '@mui/material';
import { useListEmployees } from '@hooks';
import {
  EmployeeCard,
  EmployeesFilter,
  EmployeesSort,
  ErrorNotice,
  Header
} from '@components';
import { SortField, SortOrder } from '@constants';

export function Employees() {
  const [sortField, setSortField] = useState<SortField>(SortField.NAME);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { employees, loadingEmployees, errorLoadingEmployees } =
    useListEmployees({ sortModel: { sortField, sortOrder }, searchQuery });

  const handleToggleSortOrder = () => {
    setSortOrder(sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC);
  };

  const handleToggleSortField = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: SortField
  ) => setSortField(value);

  const handleSearchQueryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setSearchQuery(e.target.value);

  return (
    <React.Fragment>
      <Header title=" The fellowship of the tretton37" />
      {loadingEmployees && (
        <Stack>
          <LinearProgress variant="query" />
          Loading...
        </Stack>
      )}
      {errorLoadingEmployees && (
        <ErrorNotice
          title=" Oops... error has occured:"
          subtitle={errorLoadingEmployees.message}
        />
      )}
      {!loadingEmployees && !errorLoadingEmployees && (
        <React.Fragment>
          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="flex-end"
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            <EmployeesFilter
              searchQuery={searchQuery}
              onQueryChange={handleSearchQueryChange}
            />
            <EmployeesSort
              sortModel={{ sortOrder, sortField }}
              onToggleSortField={handleToggleSortField}
              onToggleSortOrder={handleToggleSortOrder}
            />
          </Stack>
          {employees.length > 0 ? (
            <Grid container spacing={2} alignItems="stretch">
              {employees.map((employee) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={employee.email}>
                  <EmployeeCard employee={employee} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <ErrorNotice title="No employees found" />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
