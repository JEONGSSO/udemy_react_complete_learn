import React from 'react';
import { render, fireEvent, screen } from '@/test-utils/testing-library-utils';

import { Counter } from '../index';

/**
 * @jest-environment jsdom
 */

describe('카운터 앱', () => {
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
