import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MockedProvider } from '@apollo/react-testing';

import { OrderDetailsProvider } from '@/contexts/OrderDetails';

const renderWithContext = (component: ReactElement, mocks?: any) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {component}
    </MockedProvider>
  );
};

export * from '@testing-library/react';

// render 덮어쓰기
export { renderWithContext as render };
