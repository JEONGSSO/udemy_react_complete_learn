import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { Login } from '../index';

describe('login test', () => {
  it('로그인 성공 테스트', async () => {
    const email: String = 'test@naver.com';
    const password: String = '1234';

    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Login />
      </MockedProvider>
    );

    waitFor(async () => {
      const emailElem = screen.getByPlaceholderText('이메일을 입력해주세요.');
      const passwordElem =
        screen.getByPlaceholderText('비밀번호를 입력해주세요.');

      fireEvent.change(emailElem, { target: { value: email } });
      fireEvent.change(passwordElem, { target: { value: password } });

      const buttonElem = screen.getByRole('button');
      fireEvent.click(buttonElem);

      const loginSuccessElem = screen.getByText('로그인 성공!');
      expect(loginSuccessElem).toBeInTheDocument();
    });
  });
});
