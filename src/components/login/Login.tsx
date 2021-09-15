import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from '@apollo/client';

import { BaseTextField, BaseButton } from '@/layout/common';
import LoginVar from '@/store/login';

import { GET_ALL_USERS } from './query';
import { UserData } from './type';

import './input.scss';

const Login = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });

  const [isLoading, setLoading] = useState(false);
  const isLogin = LoginVar();

  const userDataSetter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  console.log(data);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validLogin = (
      { users = [] }: { users: UserData[] },
      { email, password }: UserData
    ) => {
      console.log('users', users);
      return users.some(
        (user) => user.email === email && user.password === password
      );
    };

    const isLogin = validLogin(data.users, userData);

    LoginVar(isLogin);
    setLoading(false);
  };

  if (loading) return <div>loading...</div>;
  if (error) <div>ERROR</div>;

  return (
    <form onSubmit={handleSubmit}>
      <BaseTextField
        label="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        onChange={userDataSetter}
        value={userData.email}
        disabled={isLoading}
      />
      <BaseTextField
        type="password"
        label="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={userDataSetter}
        value={userData.password}
        disabled={isLoading}
        InputProps={{
          inputProps: {
            autoComplete: 'email',
          },
        }}
      />
      <BaseButton type="submit" onClick={handleSubmit} size="medium">
        로그인
      </BaseButton>
      {isLogin && <p>로그인 성공!</p>}
    </form>
  );
};

export default Login;
