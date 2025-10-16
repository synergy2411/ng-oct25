import { IUser } from './user-model';

export const USER_DATA: IUser = {
  firstName: 'bill',
  lastName: 'gates',
  dob: new Date('Dec 12, 1965'),
  income: 50000,
  isWorking: true,
  company: 'Microsoft',
  votes: 120,
  avatar: './assets/images/bill.jpeg',
};
