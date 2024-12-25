/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Community = {
  __typename?: 'Community';
  communityUsers?: Maybe<Array<CommunityUser>>;
  createdAt: Scalars['DateTime']['output'];
  creator: User;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommunityUser = {
  __typename?: 'CommunityUser';
  community: Community;
  id: Scalars['Int']['output'];
  role: Scalars['String']['output'];
  user: User;
};

export type CreateCommunityInput = {
  /** Description of the community */
  description: Scalars['String']['input'];
  /** Name of the community */
  name: Scalars['String']['input'];
};

export type CreatePostDto = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCommunity?: Maybe<Community>;
  createPost: Post;
  createUser: User;
  removeCommunity: Community;
  updateCommunity: Community;
};


export type MutationCreateCommunityArgs = {
  createCommunityInput: CreateCommunityInput;
};


export type MutationCreatePostArgs = {
  createPostDto: CreatePostDto;
};


export type MutationCreateUserArgs = {
  createUserDatas: CreateUserDto;
};


export type MutationRemoveCommunityArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCommunityArgs = {
  updateCommunityInput: UpdateCommunityInput;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  community?: Maybe<Community>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  downvotes: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  upvotes: Scalars['Int']['output'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  community: Community;
  communityDetail: Community;
  me: User;
  myCommunities: Array<Community>;
  user: User;
  users: Array<User>;
};


export type QueryCommunityArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCommunityDetailArgs = {
  name: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

export type UpdateCommunityInput = {
  /** Description of the community */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** Name of the community */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  communityUsers?: Maybe<Array<CommunityUser>>;
  createdAt: Scalars['DateTime']['output'];
  createdCommunities?: Maybe<Array<Community>>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  karma: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  posts?: Maybe<Array<Post>>;
  profilePictureUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
  votes?: Maybe<Array<Vote>>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['Int']['output'];
  isUpvote: Scalars['Boolean']['output'];
  post: Post;
  user: User;
};

export type CommunityDetailQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type CommunityDetailQuery = { __typename?: 'Query', communityDetail: { __typename?: 'Community', id: number, name: string, description: string, createdAt: any, updatedAt: any, posts?: Array<{ __typename?: 'Post', id: number, title: string, content: string, author: { __typename?: 'User', id: number, username: string } }> | null, creator: { __typename?: 'User', id: number, username: string } } };

export type CreateCommunityMutationVariables = Exact<{
  createCommunityInput: CreateCommunityInput;
}>;


export type CreateCommunityMutation = { __typename?: 'Mutation', community?: { __typename?: 'Community', id: number, name: string, description: string, createdAt: any, updatedAt: any, creator: { __typename?: 'User', id: number, username: string } } | null };

export type MyCommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCommunitiesQuery = { __typename?: 'Query', communities: Array<{ __typename?: 'Community', id: number, name: string, description: string, createdAt: any, updatedAt: any }> };

export type CreatePostMutationVariables = Exact<{
  createPostDto: CreatePostDto;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', post: { __typename?: 'Post', id: number, title: string, content: string, createdAt: any, updatedAt: any, author: { __typename?: 'User', id: number, username: string } } };

export type CreateUserMutationVariables = Exact<{
  createUserDatas: CreateUserDto;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', user: { __typename?: 'User', id: number, username: string, email: string, isActive: boolean, createdAt: any, updatedAt: any } };


export const CommunityDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommunityDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"communityDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CommunityDetailQuery, CommunityDetailQueryVariables>;
export const CreateCommunityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCommunity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCommunityInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCommunityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"community"},"name":{"kind":"Name","value":"createCommunity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCommunityInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCommunityInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateCommunityMutation, CreateCommunityMutationVariables>;
export const MyCommunitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myCommunities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"communities"},"name":{"kind":"Name","value":"myCommunities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MyCommunitiesQuery, MyCommunitiesQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPostDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePostDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"post"},"name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPostDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPostDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserDatas"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserDatas"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserDatas"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;