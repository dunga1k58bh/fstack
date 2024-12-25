import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create Apollo Client function
export function createApolloClient(initialState = {}, token = '') {
	// Server-Side Rendering: Token handling
	const authLink = setContext((_, { headers }) => {
		// Use the token passed to the client, which is fetched differently for SSR
		const tokenFromClient = token || ''; // Default to empty string if no token
		return {
			headers: {
				...headers,
				authorization: tokenFromClient
					? `Bearer ${tokenFromClient}`
					: ''
			}
		};
	});

	const graphqlUri = `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`;

	const httpLink = new HttpLink({
		uri: graphqlUri // Your GraphQL endpoint
	});

	return new ApolloClient({
		link: ApolloLink.from([authLink, httpLink]),
		ssrMode: typeof window === 'undefined', // Enable SSR mode on the server side
		cache: new InMemoryCache().restore(initialState), // Restore initial state for SSR
		defaultOptions: {
			watchQuery: {
				errorPolicy: 'all'
			},
			query: {
				errorPolicy: 'all'
			},
			mutate: {
				errorPolicy: 'all'
			}
		}
	});
}
