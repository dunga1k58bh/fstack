import { auth } from '@/auth'; // Import your auth helper
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NextRequest } from 'next/server';

// Review if we need this, and why
function stripContentEncoding(result: Response) {
	const responseHeaders = new Headers(result.headers);
	responseHeaders.delete('content-encoding');

	return new Response(result.body, {
		status: result.status,
		statusText: result.statusText,
		headers: responseHeaders
	});
}

const httpLink = createHttpLink({
	uri:
		process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
		'http://localhost:3001/graphql',
	credentials: 'include' // Send cookies if needed
});

const authLink = setContext(async (_, { headers }) => {
	const session = await auth(); // Get session from auth helper
	const token = session?.accessToken;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

async function handler(request: NextRequest) {
	const session = await auth();
	const body = await request.json();

	const res = await client.query({
		query: body.query,
		variables: body.variables,
		context: {
			headers: {
				authorization: session?.accessToken
					? `Bearer ${session.accessToken}`
					: ''
			}
		}
	});

	return new Response(res.data, { status: 200 });
}

export const dynamic = 'force-dynamic';

export { handler as GET, handler as POST };
