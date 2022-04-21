import { AxiosError } from 'axios';
import { useAxios } from '@hooks';
import { Employee } from '@types';

interface ListEmployeesReturnProps {
  employees: Employee[];
  loadingEmployees: boolean;
  errorLoadingEmployees?: AxiosError;
}

export const useListEmployees = (): ListEmployeesReturnProps => {
  const { data, loading, error } = useAxios<Employee[]>({
    method: 'GET',
    url: `/employees`
  });

  return {
    employees: data || [],
    loadingEmployees: loading,
    errorLoadingEmployees: error
  };
};
