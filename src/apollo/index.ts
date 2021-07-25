import { ApolloClient, InMemoryCache } from '@apollo/client';

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
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache,
});
