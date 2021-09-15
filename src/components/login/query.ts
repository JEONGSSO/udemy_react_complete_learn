import { gql } from '@apollo/client';

export const ToggleLoginStatus = gql`
  query {
    getLoginStatus @client
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser {
    users {
      name
      email
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      email
      password
    }
  }
`;
