import { Injectable } from '@angular/core';
import { IInstitutionalizedRepository } from '../../../infrastructure/protocols/institutionalized-repository';
import { InstitutionalizedDoesNotExist } from '../../errors/institutionalized-does-not-exist';
import { Institutionalized } from '../../models/institutionalized';
import { VitalSigns } from '../../models/vital-signs';
import { IRegisterVitalSignsService } from '../../protocols/register-vital-signs';

@Injectable({
  providedIn: 'root',
})
export class RegisterVitalSignsService implements IRegisterVitalSignsService {
  constructor(private readonly institutionalizedRepository: IInstitutionalizedRepository) {}

  async register(vitalSigns: VitalSigns, institutionalizedId: String): Promise<Institutionalized> {
    const institutionalized = await this.institutionalizedRepository.findById(
      institutionalizedId.toString()
    );
    if (!institutionalized) {
      throw new InstitutionalizedDoesNotExist(institutionalizedId);
    }
    institutionalized.clinicalHistory = [...institutionalized.clinicalHistory, vitalSigns];
    return this.institutionalizedRepository.update(institutionalized);
  }
}
