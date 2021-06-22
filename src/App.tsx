import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './layout';

import routes from '@/routes';
import { RouteWithSubRoutes } from './modules';

export default () => (
  <Router>
    <Header />
    <main>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.name} {...route} />
      ))}
    </main>
  </Router>
);
