import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import routes from '@/routes';

import './header.scss';

export default () => {
  const match = useLocation();
  console.log('headerrrrrrrrrr match', match);

  return (
    <header>
      <Link to={`/`}>
        <h1>logo</h1>
      </Link>
      <nav className="nav">
        {routes.map((route) => (
          <Link
            className="nav_link"
            to={route.path.replace(/(\/:[a-z])\w/, '')}
            key={route.name}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
