import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { GqlAuthGuard } from 'src/auth/graphql-auth.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => [User])
	users(): Promise<User[]> {
		return this.usersService.findAll();
	}

	@Query(() => User)
	user(@Args('id') id: number): Promise<User> {
		const user = this.usersService.findOne(id);
		if (!user) {
			throw new NotFoundException(id);
		}

		return user;
	}

	@Mutation(() => User)
	@Public()
	async createUser(
		@Args('createUserDatas') createUserDatas: CreateUserDto
	): Promise<User> {
		return this.usersService.create(createUserDatas);
	}

	@Query(() => User)
	@UseGuards(GqlAuthGuard)
	me(@CurrentUser() user: User) {
		return this.usersService.findOne(user.id);
	}
}
