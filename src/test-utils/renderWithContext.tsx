import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/react-testing';

import { client } from '@/apollo';
import { OrderDetailsProvider } from '@/contexts/OrderDetails';

const renderWithContext = <T extends MockedResponse[]>(
  component: ReactElement,
  mocks?: T
) => {
  return render(
    // <ApolloProvider client={client}>
    <MockedProvider mocks={mocks} addTypename={false}>
      {component}
    </MockedProvider>
    // </ApolloProvider>
  );
};

export default renderWithContext;

// export * from '@testing-library/react';

// // render 덮어쓰기
// export { renderWithContext as render };
