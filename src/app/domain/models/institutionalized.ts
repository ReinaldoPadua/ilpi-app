import { User } from "./user";
import { VitalSigns } from "./vital-signs";

export interface Institutionalized extends User {
  name: String;
  enrollment: String;
  clinicalHistory?: Array<VitalSigns>;
}
