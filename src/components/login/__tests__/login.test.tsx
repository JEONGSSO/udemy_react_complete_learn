import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { Login } from '../index';

describe('login test', () => {
  it('로그인 성공 테스트', async () => {
    const email: String = 'test@naver.com';
    const password: String = 'test1234';

    render(<Login />);

    const emailElem = screen.getByPlaceholderText('이메일을 입력해주세요.');
    const passwordElem =
      screen.getByPlaceholderText('비밀번호를 입력해주세요.');

    fireEvent.keyUp(emailElem, { target: { value: email } });
    fireEvent.keyUp(passwordElem, { target: { value: password } });

    const buttonElem = screen.getByRole('button');
    fireEvent.click(buttonElem);

    await waitFor(() => {
      const loginSuccessElem = screen.getByText('로그인 성공!');
      expect(loginSuccessElem).toBeInTheDocument();
    });
  });
});
