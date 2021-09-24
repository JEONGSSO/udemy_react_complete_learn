import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { BaseTextField, BaseButton } from '@/layout/common';
// import LoginVar from '@/store/login';

import { LOGIN } from './query';
import { UserData } from './type';

import './input.scss';

const Login = () => {
  const [login, { data, loading }] = useMutation(LOGIN);
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });

  const userDataSetter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const loginData = await login({
      variables: {
        email: userData.email,
        password: userData.password,
      },
    });
    console.log('loginDataloginDataloginDataloginData', loginData);
    // setLogin(loginData.data);
  };

  if (loading) return <div>loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <BaseTextField
        label="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        onChange={userDataSetter}
        value={userData.email}
        disabled={loading}
      />
      <BaseTextField
        type="password"
        label="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={userDataSetter}
        value={userData.password}
        disabled={loading}
        InputProps={{
          inputProps: {
            autoComplete: 'email',
          },
        }}
      />
      <BaseButton type="submit" size="medium">
        로그인
      </BaseButton>
      {isLogin && <p>로그인 성공!</p>}
    </form>
  );
};

export default Login;
