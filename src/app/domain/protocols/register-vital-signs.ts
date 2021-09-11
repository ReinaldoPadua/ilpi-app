import { Institutionalized } from "../models/institutionalized";
import { VitalSigns } from "../models/vital-signs";

export interface IRegisterVitalSignsService {
  register(vitalSigns: VitalSigns, institutionalizedId: String): Promise<Institutionalized>;
}
