import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://localhost:3001/graphql',
	documents: './graphql/**/*.graphql',
	generates: {
		'./gql/': {
			preset: 'client',
			plugins: []
		}
	}
};
export default config;
