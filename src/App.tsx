import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './layout';
import Button from './components/button/Button';

import routes from '@/routes';

export default () => (
  <Router>
    <Header />
    <Button></Button>
    <main>
      {routes.map((route) => (
        <Route key={route.name} {...route} />
      ))}
    </main>
  </Router>
);
