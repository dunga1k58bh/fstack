import { ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private usersRepository: Repository<User>
	) {}

	getCurrentUser(context: ExecutionContext): User {
		const req =
			context.getType() === 'http'
				? context.switchToHttp().getRequest()
				: GqlExecutionContext.create(context).getContext().req;

		return req.user as User; // Assumes the `user` object is set in the request
	}

	findOne(id: number): Promise<User | null> {
		return this.usersRepository.findOneBy({ id });
	}

	findWithUsername(username: string): Promise<User | null> {
		return this.usersRepository.findOneBy({ username });
	}

	findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	async create(createUserDto: Partial<User>): Promise<User> {
		let user = this.usersRepository.save(createUserDto);
		return user;
	}

	async remove(id: number): Promise<void> {
		await this.usersRepository.delete({ id });
	}
}
