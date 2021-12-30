import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { pipe, filter, take, map, reduce, range, tap } from '@fxts/core';

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

  useEffect(() => {
    const even = (num: number) => num % 2 === 0;
    const add = (prev: number, acc: number) => prev + acc;
    const squareNums = pipe(
      range(Infinity),
      map((a) => a * a)
    );

    pipe(
      squareNums,
      tap((a) => {
        console.log(a);
      }),
      filter(even),
      take(10),
      reduce(add),
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
