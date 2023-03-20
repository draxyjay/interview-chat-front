import { User } from './User';

export interface Message {
  text: string;
  user: User;
  date: number;
}
