import axios, { AxiosResponse } from 'axios';
import { Employee, Office, OrgUnit, SortModel } from '@types';
import { useAxios, useListEmployees } from '@hooks';
import { SortField, SortOrder } from '@constants';

// jest.mock('axios');

// const mockedAxios = axios as jest.Mocked<typeof axios>;
const employees: Employee[] = [
  {
    name: 'Jon Adams',
    email: 'jon.adams@1337.tech',
    phoneNumber: null,
    office: Office.Lund,
    manager: 'manager@1337.tech',
    orgUnit: OrgUnit.Employees,
    mainText: null,
    gitHub: null,
    twitter: null,
    stackOverflow: null,
    linkedIn: null,
    imagePortraitUrl: null,
    imageWallOfLeetUrl: null,
    highlighted: false,
    published: true
  },
  {
    name: 'Wolt Baker',
    email: 'jon.adams@1337.tech',
    phoneNumber: null,
    office: Office.Helsingborg,
    manager: 'manager@1337.tech',
    orgUnit: OrgUnit.Employees,
    mainText: null,
    gitHub: null,
    twitter: null,
    stackOverflow: null,
    linkedIn: null,
    imagePortraitUrl: null,
    imageWallOfLeetUrl: null,
    highlighted: false,
    published: true
  }
];
const sortModel1: SortModel = {
  sortField: SortField.NAME,
  sortOrder: SortOrder.ASC
};
const searchQuery1 = '';
const sortModel2: SortModel = {
  sortField: SortField.OFFICE,
  sortOrder: SortOrder.DESC
};
const searchQuery2 = 'Lund';

describe('useListEmployees hook', () => {
  test('should return employees', async () => {
    jest.spyOn(useAxios).mockImplementation(() => {});
    // useListEmployees.mockReturnValue({
    //   loading: false,
    //   data: employees
    // });
    // const data = await useListEmployees({
    //   sortModel: sortModel1,
    //   searchQuery: searchQuery1
    // });
    // expect(data).toEqual(employees);
  });
});
