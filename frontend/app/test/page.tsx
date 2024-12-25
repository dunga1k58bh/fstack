import { auth } from '@/auth';
import TestComp from '@/components/test';
import { SessionProvider } from 'next-auth/react';

export default async function Test() {
	const session = await auth();

	return (
		<SessionProvider basePath={'/auth'} session={session}>
			<TestComp />
		</SessionProvider>
	);
}
