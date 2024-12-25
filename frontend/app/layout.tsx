'use client';

import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@/lib/apolloClient';
import './globals.css';
import { ThemeProvider } from '@/components/Theme/ThemeContext';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import Layout from '@/components/Layout/Layout';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

export default function Root({
	children,
	apolloCache = {} // Hydrated cache passed from server-side (SSR)
}: Readonly<{ children: React.ReactNode; apolloCache?: any }>) {
	return (
		<html lang="en">
			<body>
				<SessionProvider>
					<Main apolloCache={apolloCache}>{children}</Main>
				</SessionProvider>
			</body>
		</html>
	);
}

function Main({
	children,
	apolloCache
}: Readonly<{ children: React.ReactNode; apolloCache?: any }>) {
	// Get the token using useSession hook (client-side)
	const { data: session } = useSession();

	// Memoize Apollo Client with or without cache
	const client = useMemo(() => {
		return createApolloClient(apolloCache, session?.accessToken || '');
	}, [session, apolloCache]);

	return (
		<ApolloProvider client={client}>
			<NextUIProvider>
				<ThemeProvider>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</NextUIProvider>
		</ApolloProvider>
	);
}
