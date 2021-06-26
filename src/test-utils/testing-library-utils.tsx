import { OrderDetilsProvider } from '@/contexts/OrderDetails';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';

const renderWithContext = (ui: ReactElement, options: any = {}) =>
  render(ui, { wrapper: OrderDetilsProvider, ...options });

export * from '@testing-library/react';

// render 덮어쓰기
export { renderWithContext as render };
