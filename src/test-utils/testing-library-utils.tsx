import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';

import { OrderDetailsProvider } from '@/contexts/OrderDetails';
import { client } from '@/apollo/index';

const AllTheProvider: FC = ({ children }) => (
  <ApolloProvider client={client}>
    <OrderDetailsProvider>{children}</OrderDetailsProvider>
  </ApolloProvider>
);

const renderWithContext = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: AllTheProvider, ...options });

export * from '@testing-library/react';

// render 덮어쓰기
export { renderWithContext as render };
