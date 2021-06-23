import React, { ChangeEvent, FormEvent, useState } from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './signPage.scss';

const SignPage = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setAccount({
      email: '',
      password: '',
    });
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [target.name]: target.value,
    });
  };

  return (
    <div className="sign-in">
      <h2> account </h2>
      <span>email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={account.email}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={account.password}
          label="password"
          required
        />
        <CustomButton type="submit">submit</CustomButton>
      </form>
    </div>
  );
};

export default SignPage;
