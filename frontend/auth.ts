import axios from 'axios';
import NextAuth, { AuthError, DefaultSession, User } from 'next-auth';
import Apple from 'next-auth/providers/apple';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
	debug: true,
	theme: { logo: 'https://authjs.dev/img/logo-sm.png' },
	providers: [
		Credentials({
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			authorize: async (credentials) => {
				try {
					const res = await axios.post(
						`${process.env.BACKEND_URL}/auth/login`,
						{
							username: credentials.username,
							password: credentials.password
						}
					);

					// If login is successful, return the user information with JWT
					if (res.data.access_token) {
						return { accessToken: res.data.access_token };
					}
				} catch (error) {
					console.log(error.response.data);
				}

				// Return null if authentication fails
				return null;
			}
		}),
		Apple
	],
	session: { strategy: 'jwt' },
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				// Use the JWT token from the backend directly
				token.accessToken = user.accessToken;
			}
			return token;
		},
		session({ session, token }) {
			// Include the access token and user information in the session
			return {
				...session,
				accessToken: token.accessToken
			};
		}
	}
});

declare module 'next-auth' {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			id: number;
			username: string;
			roles: string[];
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession['user'];

		accessToken?: string;
	}
}
