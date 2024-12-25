/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query CommunityDetail($name: String!) {\n  communityDetail(name: $name) {\n    id\n    name\n    description\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        username\n      }\n    }\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}": types.CommunityDetailDocument,
    "mutation CreateCommunity($createCommunityInput: CreateCommunityInput!) {\n  community: createCommunity(createCommunityInput: $createCommunityInput) {\n    id\n    name\n    description\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}": types.CreateCommunityDocument,
    "query myCommunities {\n  communities: myCommunities {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}": types.MyCommunitiesDocument,
    "mutation CreatePost($createPostDto: CreatePostDto!) {\n  post: createPost(createPostDto: $createPostDto) {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}": types.CreatePostDocument,
    "mutation CreateUser($createUserDatas: CreateUserDto!) {\n  user: createUser(createUserDatas: $createUserDatas) {\n    id\n    username\n    email\n    isActive\n    createdAt\n    updatedAt\n  }\n}": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CommunityDetail($name: String!) {\n  communityDetail(name: $name) {\n    id\n    name\n    description\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        username\n      }\n    }\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query CommunityDetail($name: String!) {\n  communityDetail(name: $name) {\n    id\n    name\n    description\n    posts {\n      id\n      title\n      content\n      author {\n        id\n        username\n      }\n    }\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateCommunity($createCommunityInput: CreateCommunityInput!) {\n  community: createCommunity(createCommunityInput: $createCommunityInput) {\n    id\n    name\n    description\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateCommunity($createCommunityInput: CreateCommunityInput!) {\n  community: createCommunity(createCommunityInput: $createCommunityInput) {\n    id\n    name\n    description\n    creator {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query myCommunities {\n  communities: myCommunities {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query myCommunities {\n  communities: myCommunities {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($createPostDto: CreatePostDto!) {\n  post: createPost(createPostDto: $createPostDto) {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreatePost($createPostDto: CreatePostDto!) {\n  post: createPost(createPostDto: $createPostDto) {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($createUserDatas: CreateUserDto!) {\n  user: createUser(createUserDatas: $createUserDatas) {\n    id\n    username\n    email\n    isActive\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateUser($createUserDatas: CreateUserDto!) {\n  user: createUser(createUserDatas: $createUserDatas) {\n    id\n    username\n    email\n    isActive\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;