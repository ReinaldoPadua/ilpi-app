import { User } from './user';

export interface Nurse extends User {
  name: string;
  corenNumber: string;
}
