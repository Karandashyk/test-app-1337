export enum Office {
  Lund = 'Lund',
  Helsingborg = 'Helsingborg',
  Stockholm = 'Stockholm',
  Borlänge = 'Borlänge',
  Ljubljana = 'Ljubljana',
  Öresund = 'Öresund'
}

export enum OrgUnit {
  Employees = '/Employees',
  Admins = '/Admins',
  Incoming = '/Incoming'
}

export interface Employee {
  name: string;
  email: string;
  phoneNumber: string | null;
  office: Office | null;
  manager: string;
  orgUnit: OrgUnit;
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
  published: boolean;
}
