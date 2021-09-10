import { IInstitutionalizedRepository } from "../../../infrastructure/protocols/institutionalized-repository";
import { InstitutionalizedDoesNotExist } from "../../errors/institutionalized-does-not-exist";
import { Institutionalized } from "../../models/institutionalized";
import { VitalSigns } from "../../models/vital-signs";
import { IRegisterVitalSignsService } from "../../protocols/register-vital-signs";

export class RegisterVitalSignsService implements IRegisterVitalSignsService {
  constructor(private readonly institutionalizedRepository: IInstitutionalizedRepository) {}

  register(vitalSigns: VitalSigns, institutionalizedId: String): Institutionalized {
    const institutionalized = this.institutionalizedRepository.findById(institutionalizedId);
    if (!institutionalized) throw new InstitutionalizedDoesNotExist(institutionalizedId);
    institutionalized.clinicalHistory = [...institutionalized.clinicalHistory, vitalSigns];
    return this.institutionalizedRepository.update(institutionalized);
  }
}
