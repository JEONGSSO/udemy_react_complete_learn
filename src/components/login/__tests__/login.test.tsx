import React from 'react';
import { render, fireEvent, screen } from '@/test-utils/testing-library-utils';

import { EXCHANGE_RATES } from '../query';
import { Login } from '../index';

describe('login test', () => {
  test('로그인 테스트', async () => {
    const email: String = 'test@naver.com';
    const password: String = '1234';

    const mocks = [
      {
        request: {
          query: EXCHANGE_RATES,
          variables: { index: 4 },
        },
        result: {
          data: {
            dog: {
              name: 'Douglas',
            },
          },
        },
      },
      {
        request: {
          query: EXCHANGE_RATES,
          variables: { index: 8 },
        },
        error: new Error('Something went wrong'),
      },
    ];

    render(<Login />, mocks);

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
