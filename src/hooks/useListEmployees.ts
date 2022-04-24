import { useMemo } from 'react';
import { AxiosError } from 'axios';
import { useAxios } from '@hooks';
import { Employee, SortModel } from '@types';

interface ListEmployeesReturnProps {
  employees: Employee[];
  loadingEmployees: boolean;
  errorLoadingEmployees?: AxiosError;
}

const searchEmployees = (employee: Employee, query: string) =>
  employee.name.toLowerCase().includes(query.toLowerCase()) ||
  employee.office?.toLowerCase().includes(query.toLowerCase());

const sortEmployees = (
  a: Employee,
  b: Employee,
  { sortField, sortOrder }: SortModel
) => {
  const aField = a[sortField] || '';
  const bField = b[sortField] || '';
  if (aField < bField) {
    return -sortOrder;
  }
  if (aField > bField) {
    return sortOrder;
  }
  return 0;
};

export const useListEmployees = ({
  sortModel,
  searchQuery
}: {
  sortModel: SortModel;
  searchQuery: string;
}): ListEmployeesReturnProps => {
  const {
    data = [],
    loading,
    error
  } = useAxios<Employee[]>({
    method: 'GET',
    url: '/employees'
  });

  const memoizedEmployees = useMemo(() => {
    return [...data]
      .filter((employee) => searchEmployees(employee, searchQuery))
      .sort((a, b) => sortEmployees(a, b, sortModel));
  }, [data, sortModel, searchQuery]);

  return {
    employees: memoizedEmployees,
    loadingEmployees: loading,
    errorLoadingEmployees: error
  };
};
