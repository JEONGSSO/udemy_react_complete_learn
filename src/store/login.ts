import { makeVar } from '@apollo/client';

const LoginVar = makeVar(false);

export const login = () => {
  const preLogin = LoginVar();
  LoginVar(!preLogin);
};

export default LoginVar;
