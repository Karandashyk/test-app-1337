import React, { useState } from 'react';
import { Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { useListEmployees } from '@hooks';
import {
  EmployeeCard,
  EmployeesFilter,
  EmployeesSort,
  ErrorNotice,
  Header
} from '@components';
import { SortField, SortOrder } from '@constants';
import { SortModel } from '@types';

export function Employees() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortModel, setSortModel] = useState<SortModel>({
    sortField: SortField.NAME,
    sortOrder: SortOrder.ASC
  });
  const { employees, loadingEmployees, errorLoadingEmployees } =
    useListEmployees({ sortModel, searchQuery });

  const handleToggleSortOrder = () => {
    setSortModel({
      ...sortModel,
      sortOrder:
        sortModel.sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC
    });
  };

  const handleToggleSortField = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: SortField
  ) =>
    setSortModel({
      ...sortModel,
      sortField: value
    });

  const handleSearchQueryChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setSearchQuery(e.target.value);

  return (
    <React.Fragment>
      <Header title=" The fellowship of the tretton37" />
      {loadingEmployees && (
        <Stack>
          <LinearProgress variant="query" />
          <Typography variant="h4" component="div">
            Loading...
          </Typography>
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
            sx={{
              mt: 2,
              mb: 2,
              justifyContent: 'flex-end'
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{ mr: 'auto', alignSelf: 'center', color: 'text.secondary' }}
            >
              {`${employees.length} employees`}
            </Typography>
            <EmployeesFilter
              searchQuery={searchQuery}
              onQueryChange={handleSearchQueryChange}
            />
            <EmployeesSort
              sortModel={sortModel}
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
