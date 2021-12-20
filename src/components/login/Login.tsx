import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { pipe, filter, take, map, reduce } from '@fxts/core';

import { BaseTextField, BaseButton } from '@/layout/common';

import { LOGIN } from './query';
import { UserData } from './type';

import './input.scss';

const Login = () => {
  const [login, { loading }] = useMutation(LOGIN);
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

    const { data } = await login({
      variables: {
        email: userData.email,
        password: userData.password,
      },
    });
    setLogin(data.isCompleted);
  };

  const numberrr = (num: number) => {
    console.log(num);
    return;
  };

  useEffect(() => {
    // pipe(
    //   [1, 2, 3, 4, 5],
    //   filter((a) => a % 2 === 0),
    //   // map((a) => a + 10),
    //   reduce((a, acc) => a + acc),
    //   console.log
    // );
    pipe(
      [1, 2, 3],
      filter((num) => num % 2 === 0),
      reduce((a, acc) => a + acc),
      console.log
    );
  }, []);

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
