import { BaseError } from './base-error';

export class NurseDoesNotExist extends BaseError {
	constructor() {
		super(`Nurse does not exist`);
		this.name = this.constructor.name;
	}
}
