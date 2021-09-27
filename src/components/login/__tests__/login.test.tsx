import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '@/test-utils/renderWithContext';
import { Login } from '../index';
import { LOGIN } from './../query';

describe('login test', () => {
  test('로그인 테스트', async () => {
    const email = 'kim@naver.com';
    const password = 'kim';

    const mocks = [
      {
        request: {
          query: LOGIN,
          variables: {
            email,
            password,
          },
        },
        result: {
          data: {
            isCompleted: true,
          },
        },
      },
    ];

    render(<Login />, mocks);

    const emailElem = await screen.findByPlaceholderText(
      '이메일을 입력해주세요.'
    );
    const passwordElem = await screen.findByPlaceholderText(
      '비밀번호를 입력해주세요.'
    );
    userEvent.type(emailElem, email);
    userEvent.type(passwordElem, password);

    const buttonElem = await screen.findByRole('button', {
      name: '로그인',
    });
    userEvent.click(buttonElem);

    const loginSuccessElem = await screen.findByText('로그인 성공!');
    expect(loginSuccessElem).toBeInTheDocument();
  });
});
