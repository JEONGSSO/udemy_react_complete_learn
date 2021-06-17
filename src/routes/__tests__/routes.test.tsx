import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import App from '@/App';

describe('Routes Test', () => {
  it('input link click', () => {
    render(<App />);
    const LoginLinkElem = screen.getByText('login');

    fireEvent.click(LoginLinkElem);

    const { pathname } = location;
    expect(pathname).toBe('/login');

    const emailInputElem =
      screen.getByPlaceholderText('이메일을 입력해주세요.');
    expect(emailInputElem).toBeInTheDocument();
  });
});
