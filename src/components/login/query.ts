import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates($currency: String) {
    rates(currency: $currency) {
      currency
      rate
    }
  }
`;

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

export const GetAllUsers = gql`
  query GetAllUsers {
    users {
      email
      password
    }
  }
`;
