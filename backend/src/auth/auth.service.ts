import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthResponse } from './dto/auth.response.dto';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.findWithUsername(username);
		if (user && user.password === pass) {
			return {
				id: user.id,
				username: user.username,
				email: 'hihi@gmail.com'
			};
		}
		return null;
	}

	async login(user: any) {
		const payload = {
			sub: user.id,
			username: user.username,
			email: user.email
		};

		return {
			access_token: this.jwtService.sign(payload)
		};
	}
}
