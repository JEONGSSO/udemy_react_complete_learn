import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery } from '@apollo/client';
import { BaseTextField, BaseButton } from '@/layout/common';

import './input.scss';

import users, { Users } from './dummy';
import { EXCHANGE_RATES } from './query';
import { UserData } from './type';

export default () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });
  const [isLoading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);

  const userDataSetter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validLogin = (
      users: Array<Users> = [],
      email: string,
      password: string
    ) =>
      users.some((user) => user.email === email && user.password === password);

    const fakeFetchUsers = new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(users),
        // reject('오류가 발생하였습니다.'),
        1000
      );
    });

    const data: any = await fakeFetchUsers.then((res) => res).catch(alert);

    setLogin(validLogin(data, userData.email, userData.password));
    setLoading(false);
  };

  if (loading) {
    return <div>loading...</div>;
  }

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
      {login && <p>로그인 성공!</p>}
    </form>
  );
};
