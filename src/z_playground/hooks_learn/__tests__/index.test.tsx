import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Test from '../';

describe.skip('hooks test', () => {
  it('훅 기능 테스트', async () => {
    render(<Test />);

    const searchElem = screen.getByRole('searchbox');

    fireEvent.change(searchElem, { target: { value: '123' } });
    expect((searchElem as HTMLInputElement).value).toBe('123');
  });
});
