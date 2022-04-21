import React from 'react';
import { Grid } from '@mui/material';
import { useListEmployees } from '@hooks';
import { EmployeeCard } from '@components';

export function Employees() {
  const { employees, loadingEmployees, errorLoadingEmployees } =
    useListEmployees();

  return (
    <React.Fragment>
      {loadingEmployees && <p>Loading...</p>}
      {errorLoadingEmployees && <p>{errorLoadingEmployees.message}</p>}
      {!loadingEmployees && !errorLoadingEmployees && (
        <Grid container spacing={2} alignItems="stretch">
          {employees.map((employee) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={employee.email}>
              <EmployeeCard employee={employee} />
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
}
