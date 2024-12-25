// src/graphql/mutations.ts

export const LOGIN_MUTATION = `
  mutation Login($loginDto: LoginDto!) {
    login(loginDto: $loginDto) {
      id
      email
      image
      username
      roles
      accessToken
    }
  }
`;

export const CREATE_USER_MUTATION = `
  mutation CreateUser($createUserDatas: CreateUserDto!) {
    createUser(createUserDatas: $createUserDatas) {
      id
      username
      email
      isActive
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_POST_MUTATION = `
  mutation CreatePost($createPostDto: CreatePostDto!) {
    post: createPost(createPostDto: $createPostDto) {
      id
      title
      content
      author {
        id
        username
      }
      createdAt
      updatedAt
    }
  }
`;
