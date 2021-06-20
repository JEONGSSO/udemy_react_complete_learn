import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Button, { replaceCamelWithSpaces } from '../Button';

describe('udemy testing learn', () => {
  it('button has correct initial color', () => {
    render(<Button />);

    const colorButton = screen.getByRole('button', {
      name: 'Change to Midnight Blue',
    }); // name을 붙이는 것은 좋은 습관
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    // button turns blue when clicked
    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    expect(colorButton.textContent).toBe('Change to Medium Violet Red');
  });

  it('initial conditions', () => {
    render(<Button />);

    const colorButton = screen.getByRole('button', {
      name: 'Change to Midnight Blue',
    });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  });
});

describe('spaces before camel-case capitial letters', () => {
  it('works for no capital', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  it('works for no one capital', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('works for no multiple capital', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});

// 단위테스트는 언제 해야하는가?
// 유닛 테스트는 엣지 케이스를 커버하는데 도움이 된다.

// 함수 테스트의 원인을 확인 할 수 있는 경우 테스트에 유용함.

// 복잡한 함수를 테스트 한다면 단위테스트를 진행 할 수 있다.
