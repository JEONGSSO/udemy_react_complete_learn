import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/test-utils/renderWithContext';

import { Counter } from '../index';

/**
 * @jest-environment jsdom
 */

describe.skip('카운터 앱', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('increment Click Event Call', () => {
    const increButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(increButton);
    const paragraphElem = screen.getByText(/current count:/i);

    expect(paragraphElem.textContent).toBe('current count:1');
  });

  it('decrement Click Event Call', () => {
    const decreButton = screen.getByRole('button', { name: '-' });

    fireEvent.click(decreButton);
    const paragraphElem = screen.getByText(/current count:/i);

    expect(paragraphElem.textContent).toBe('current count:-1');
  });
});
