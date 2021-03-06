import { Institutionalized } from '../models/institutionalized';
import { VitalSigns } from '../models/vital-signs';

export abstract class IRegisterVitalSignsService {
  register(vitalSigns: VitalSigns, institutionalizedId: string): Promise<Institutionalized> {
    return;
  }
}
