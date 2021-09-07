import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

import LoginVar from '../store/login';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        toggleLoginStatus: {
          read() {
            return LoginVar();
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch,
  }),
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
});
