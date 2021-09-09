import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { BaseTextField, BaseButton } from '@/layout/common';
import LoginVar from '@/store/login';

import dummyUsers from './dummy';
import { EXCHANGE_RATES } from './query';
import { UserData, ValidLogin } from './type';

import './input.scss';

const Login = () => {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    password: '',
  });
  const [rate, setRate] = useState(data?.rates[count].rate);
  const [isLoading, setLoading] = useState(false);
  const isLogin = LoginVar();

  useEffect(() => {
    setRate(data?.rates[count].rate);
  }, [count]);

  const userDataSetter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const validLogin = ({ users, email, password }: ValidLogin) =>
      users.some((user) => user.email === email && user.password === password);

    const fakeFetchUsers = new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(dummyUsers),
        // reject('오류가 발생하였습니다.'),
        1000
      );
    });

    const users: UserData | any = await fakeFetchUsers
      .then((res) => res)
      .catch(alert);

    const { email, password } = userData;
    const isLogin = validLogin({ users, email, password });

    LoginVar(isLogin);
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
      {isLogin && <p>로그인 성공!</p>}
      {rate}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </form>
  );
};

export default Login;
