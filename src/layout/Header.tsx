import React from 'react';
import { Link } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { Box } from '@mui/material';

import routes from '@/routes';
import loginVar from '@/store/login';

import './header.scss';

export default () => {
  const isLogin = useReactiveVar(loginVar); // store에 있는 상태관리로 사용 가능하게 만들어줌

  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1.2,
        }}
      >
        <Link to={`/`}>
          <h1>logo</h1>
        </Link>
        {isLogin && <div className="ZZ">환영합니다.</div>}
      </Box>
      <nav className="nav">
        {routes.map((route) => (
          <Link className="nav_link" to={route.path!} key={route.name}>
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
