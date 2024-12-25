import { Catch, ArgumentsHost } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

@Catch(GraphQLError)
export class MyExceptionFilter implements GqlExceptionFilter {
	catch(exception: GraphQLError, host: ArgumentsHost) {
		const gqlHost = GqlArgumentsHost.create(host);
		return {
			message: exception.message,
			extentions: {
				code: exception.extensions?.code || 'INTERNAL_SERVER_ERROR'
			}
		};
	}
}
