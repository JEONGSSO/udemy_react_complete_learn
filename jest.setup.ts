import '@testing-library/jest-dom/extend-expect';

import { server } from './src/testing/mocks/graphql/server';
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
