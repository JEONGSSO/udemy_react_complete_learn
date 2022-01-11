import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Box } from '@mui/system';

import { BaseButton, BaseTextField } from '@/layout/common';

interface SignUpProps {}

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { email, password, confirmPassword } = userCredentials;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('userCredentials', userCredentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex' }}>
        <BaseTextField
          name="email"
          label="이메일"
          value={email}
          onChange={handleChange}
        />
        <BaseTextField
          name="password"
          label="비밀번호"
          value={password}
          onChange={handleChange}
        />
        <BaseTextField
          name="confirmPassword"
          label="비밀번호 확인"
          value={confirmPassword}
          onChange={handleChange}
        />
        <BaseButton type="submit" size="medium">
          회원가입
        </BaseButton>
      </Box>
    </form>
  );
};

export { SignUp };
