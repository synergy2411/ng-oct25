import { IUser } from './user-model';

export const USER_DATA: Array<IUser> = [
  {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 12, 1965'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft',
    votes: 120,
    avatar: './assets/images/bill.jpeg',
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('Jan 2, 1965'),
    income: 0,
    isWorking: false,
    company: 'Apple',
    votes: 180,
    avatar: './assets/images/steve.jpeg',
  },
  {
    firstName: 'tim b',
    lastName: 'lee',
    dob: new Date('Aug 20, 1965'),
    income: 30000,
    isWorking: true,
    company: 'World Wide Web',
    votes: 80,
    avatar: './assets/images/tim.jpeg',
  },
];
