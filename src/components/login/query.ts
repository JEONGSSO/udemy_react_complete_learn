import { gql } from '@apollo/client';

export const ToggleLoginStatus = gql`
  query {
    getLoginStatus @client
  }
`;

export const LOGIN = gql`
  mutation login($email: string!, $password: string!) {
    login(email: $email, password: $password) {
      completed
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
