import React from 'react';
import { fireEvent, screen, act } from '@testing-library/react';

import renderWithContext from '@/test-utils/renderWithContext';
import mocks from './login.mocks';
import { Login } from '../index';

describe('login test', () => {
  test('로그인 테스트', async () => {
    const email = 'test@naver.com';
    const password = '1234';

    renderWithContext<typeof mocks>(<Login />, mocks);

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

    const test = await screen.findByRole('textt');
    expect(test).toMatchSnapshot();
  });
});
