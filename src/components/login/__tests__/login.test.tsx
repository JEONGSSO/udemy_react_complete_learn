import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { Login } from '../index';

describe('login test', () => {
  it('로그인 성공 테스트', async () => {
    const email: String = 'test@naver.com';
    const password: String = '1234';

    render(<Login />);

    const emailElem = await screen.findByPlaceholderText(
      '이메일을 입력해주세요.'
    );
    const passwordElem = await screen.findByPlaceholderText(
      '비밀번호를 입력해주세요.'
    );
    fireEvent.change(emailElem, { target: { value: email } });
    fireEvent.change(passwordElem, { target: { value: password } });

    const buttonElem = await screen.findByRole('button', {
      name: '로그인',
    });
    fireEvent.click(buttonElem);

    const loginSuccessElem = await screen.findByText('로그인 성공!');
    expect(loginSuccessElem).toBeInTheDocument();
  });
});
