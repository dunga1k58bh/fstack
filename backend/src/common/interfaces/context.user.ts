import { Role } from '../enums/role.enum';

export class ContextUser {
	id: number;
	username: string;
	email: string;
	roles: Role[];
}
