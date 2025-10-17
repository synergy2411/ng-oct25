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
    comments: [
      { stars: 5, body: 'Like your work', author: 'monica@test.com' },
      { stars: 4, body: 'Luv it♥️', author: 'joey@test.com' },
      { stars: 3, body: 'Just like that', author: 'ross@test.com' },
    ],
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
    comments: [
      { stars: 4, body: 'Luv it♥️', author: 'chandler@test.com' },
      { stars: 3, body: 'Not that bad', author: 'ross@test.com' },
    ],
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
    comments: [],
  },
];
