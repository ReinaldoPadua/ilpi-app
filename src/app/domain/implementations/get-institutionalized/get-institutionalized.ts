import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InstitutionalizedRepository } from "src/app/infrastructure/implementations/institutionalized-repository";
import { IInstitutionalizedRepository } from "../../../infrastructure/protocols/institutionalized-repository";
import { Institutionalized } from "../../models/institutionalized";
import { IGetInstitutionalizedService } from "../../protocols/get-institutionalized";

@Injectable({
  providedIn: 'root',
})
export class GetInstitutionalizedService implements IGetInstitutionalizedService {
  constructor(private institutionalizedRepository: IInstitutionalizedRepository) {}

  get(): Promise<Institutionalized[]> {
    return this.institutionalizedRepository.get();
  }
}
