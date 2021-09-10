import { gql } from '@apollo/client';

export const ToggleLoginStatus = gql`
  query {
    getLoginStatus @client
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($name: String) {
    user {
      email
      password
    }
  }
`;
