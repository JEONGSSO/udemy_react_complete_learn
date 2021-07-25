import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
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
