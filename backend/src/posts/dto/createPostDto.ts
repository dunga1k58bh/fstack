import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreatePostDto {
	@Field()
	@IsNotEmpty()
	title: string;

	@Field()
	@IsNotEmpty()
	content: string;
}