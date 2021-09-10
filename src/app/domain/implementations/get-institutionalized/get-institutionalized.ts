import { IInstitutionalizedRepository } from "../../../infrastructure/protocols/institutionalized-repository";
import { Institutionalized } from "../../models/institutionalized";
import { IGetInstitutionalizedService } from "../../protocols/get-institutionalized";

export class GetInstitutionalizedService implements IGetInstitutionalizedService {
  constructor(private readonly institutionalizedRepository: IInstitutionalizedRepository) {}

  get(): Array<Institutionalized> {
    return this.institutionalizedRepository.get();
  }
}
