import { gql } from '@apollo/client';

export const getToppings = gql`
  query GetToppings {
    items {
      name
      imagePath
    }
  }
`;
