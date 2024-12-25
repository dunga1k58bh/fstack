import { auth } from '@/auth';
import CommunityHeader from '@/components/Community/Header/CommunityHeader';
import CommunityMain from '@/components/Community/Main/CommunityMain';
import {
	Community,
	CommunityDetailDocument,
	CommunityDetailQuery
} from '@/gql/graphql';
import { createApolloClient } from '@/lib/apolloClient';

export async function getSubredditData(subredit: string, token: string) {
	const client = createApolloClient({}, token);

	const { data, errors } = await client.query<CommunityDetailQuery>({
		query: CommunityDetailDocument,
		variables: { name: subredit }
	});

	if (!data) {
		return null;
	}

	return data.communityDetail as Community;
}

export default async function SubRedditPage({
	params
}: {
	params: { subredit: string };
}) {
	const { subredit } = await params;
	const session = await auth();

	const community = await getSubredditData(
		subredit,
		session?.accessToken || ''
	);

	if (!community) {
		return <p>Failed to fetch the data from server</p>;
	}

	return (
		<div>
			<CommunityHeader community={community} />
			<CommunityMain community={community} />
		</div>
	);
}
