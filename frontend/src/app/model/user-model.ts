import { IComment } from './comment-model';

export interface IUser {
  firstName: string;
  lastName: string;
  dob: Date;
  income: number;
  isWorking: boolean;
  company: string;
  votes: number;
  avatar: string;
  comments: Array<IComment>;
}
