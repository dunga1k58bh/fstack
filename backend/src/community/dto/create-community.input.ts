import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Matches, MinLength } from 'class-validator';

@InputType()
export class CreateCommunityInput {
	@Field({ description: 'Name of the community' })
	@IsNotEmpty({ message: 'Name is required' })
	@MinLength(3, { message: 'Name must be at least 3 characters long' })
	@Matches(/^[a-zA-Z0-9_-]+$/, {
		message:
			'Name must only contain alphanumeric characters, underscores, or hyphens, and no spaces.'
	})
	name: string;

	@Field({ description: 'Description of the community' })
	@IsNotEmpty({ message: 'Description is required' })
	description: string;
}
