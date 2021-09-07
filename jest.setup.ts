import '@testing-library/jest-dom/extend-expect';

import { server } from '@/testing/mocks/graphql/server';
import { client } from '@/apollo/index';
beforeAll(() => server.listen());

beforeEach(() => {
  // Ensure Apollo cache is cleared between tests.
  // https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.clearStore
  return client.clearStore();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
