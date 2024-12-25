import { BadRequestException, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { VotesModule } from './votes/votes.module';

import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { Vote } from './votes/vote.entity';
import { CommunityModule } from './community/community.module';
import { Community } from './community/entities/community.entity';
import { MyExceptionFilter } from './common/filters/graphql.exception';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { GraphQLError } from 'graphql';
import { isArray } from 'class-validator';
import { CommunityUser } from './community/entities/community-user.entity';

@Module({
	imports: [
		AuthModule,
		UsersModule,
		PostsModule,
		VotesModule,
		CommunityModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'database',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'test',
			entities: [User, Post, Vote, Community, CommunityUser],
			synchronize: true
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'src/schema.gql',
			formatError: (err: GraphQLError) => {
				const { extensions } = err;
				if (extensions?.originalError) {
					// Custom error format for validation errors
					return {
						message: extensions.originalError['message'],
						errors: extensions.originalError['errors'],
						code: extensions.originalError['code'] || 'BAD_REQUEST'
					};
				}

				// Default error format for other types of errors
				return {
					message: err.message,
					code: extensions?.code || 'INTERNAL_SERVER_ERROR'
				};
			}
		})
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: MyExceptionFilter
		},
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({
				transform: true, // Enables type transformation after auth check
				exceptionFactory: (validationErrors) => {
					const customErrors = validationErrors.map((error) => ({
						field: error.property,
						errors: Object.values(error.constraints || {})
					}));

					return new BadRequestException({
						statusCode: 400,
						code: 'INPUT_VALIDATION_FAILED',
						message: 'Validation failed',
						errors: customErrors
					});
				}
			})
		}
	]
})
export class AppModule {}
