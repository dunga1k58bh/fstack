// src/graphql/queries.ts

export const GET_USERS_QUERY = `
  query {
    users {
      id
      isActive
      username
      bio
      profilePictureUrl
      email
      isEmailVerified
      karma
      createdAt
      updatedAt
      posts {
        id
        title
        content
        createdAt
        updatedAt
      }
      votes {
        id
        isUpvote
        post {
          id
          title
        }
      }
    }
  }
`;

export const GET_USER_QUERY = `
  query GetUser($id: Float!) {
    user(id: $id) {
      id
      isActive
      username
      bio
      profilePictureUrl
      email
      isEmailVerified
      karma
      createdAt
      updatedAt
      posts {
        id
        title
        content
        createdAt
        updatedAt
      }
      votes {
        id
        isUpvote
        post {
          id
          title
        }
      }
    }
  }
`;
