import React, { useState } from 'react';

import './input.scss';

import users, { Users } from './dummy';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const emailSetter = ({ target }) => {
    setEmail(target.value);
  };

  const passwordSetter = ({ target }) => {
    setPassword(target.value);
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    const successLogin = (users: Array<Users> = [], email, password) =>
      users.some((user) => user.email === email && user.password === password);

    const fakeFetchUsers = new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(users),
        // reject('오류가 발생하였습니다.'),
        1000
      );
    });

    const data: any = await fakeFetchUsers.then((res) => res).catch(alert);

    if (successLogin(data, email, password)) {
      setLogin(true);
    }
  };

  return (
    <form>
      <input
        type="text"
        name="eamil"
        onKeyUp={emailSetter}
        defaultValue={email}
        placeholder="이메일을 입력해주세요."
      />
      <input
        type="password"
        name="password"
        onKeyUp={passwordSetter}
        defaultValue={password}
        placeholder="비밀번호를 입력해주세요."
      />
      <button onClick={submitHandle}>로그인</button>
      <p>로그인 {login ? '성공' : '실패'}!</p>
    </form>
  );
};
