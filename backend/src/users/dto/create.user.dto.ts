import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

@InputType()
export class CreateUserDto {
	@Field()
	@IsEmail()
	email: string;

	@Field()
	@IsNotEmpty({message: 'Username is required!'})
	@MinLength(3)
	username: string;

	@Field()
	@IsNotEmpty()
	@MinLength(6)
	password: string;
}
