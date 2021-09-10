import { BaseError } from './base-error';

export class InstitutionalizedDoesNotExist extends BaseError {
	constructor(institutionalizedId: String) {
		super(`Provided institutionalized <${institutionalizedId}> does not exist`);
		this.name = this.constructor.name;
	}
}
