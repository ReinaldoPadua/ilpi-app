import { User } from './user';
import { VitalSigns } from './vital-signs';

export interface Institutionalized extends User {
  name: string;
  enrollment: string;
  clinicalHistory?: Array<VitalSigns>;
}
