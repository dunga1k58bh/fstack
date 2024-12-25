import { DocumentNode } from 'graphql';

export const graphqlRequest = async <T>(
	query: DocumentNode,
	variables: Record<string, any> = {}
): Promise<T> => {
	const response = await fetch('/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(
			error.errors ? error.errors[0].message : 'An error occurred'
		);
	}

	const { data } = await response.json();
	return data;
};
