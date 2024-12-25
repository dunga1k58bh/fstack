'use client';

import { CreatePostDto, CreatePostMutation, Post } from '@/gql/graphql';
import { CREATE_POST_MUTATION } from '@/graphql/mutations';
import { graphqlRequest } from '@/utils/graphqlRequest';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function TestComp() {
	const { data: session, status } = useSession();
	const user = session?.user;
	const [post, setPost] = useState<Post>();

	const createPostDto: CreatePostDto = {
		title: 'hihi',
		content: 'aaaa'
	};

	const createPost = async () => {
		const res = await graphqlRequest<CreatePostMutation>(
			CREATE_POST_MUTATION,
			{
				createPostDto
			}
		);

		setPost(res.post as Post);
	};

	return (
		<div>
			<button onClick={createPost}>Click to create a random post</button>
			<div>{session?.accessToken}</div>
			<div>{post?.title}</div>
			<div>{post?.content}</div>
			<div>{post?.author.username}</div>
		</div>
	);
}
