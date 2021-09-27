import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import { client } from '@/apollo';

const renderWithContext = (
  component: ReactElement,
  mocks?: MockedResponse[]
) => {
  if (mocks) {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        {component}
      </MockedProvider>
    );
  }

  return render(<ApolloProvider client={client}>{component}</ApolloProvider>);
};

export * from '@testing-library/react';

// render 덮어쓰기
export { renderWithContext as render };
