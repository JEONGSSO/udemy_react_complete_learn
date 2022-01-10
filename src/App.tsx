import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './layout';

import routes from '@/routes';

import './App.scss';

export default () => (
  <>
    <Header />
    <main>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} {...route} element={<route.element />} />
        ))}
      </Routes>
    </main>
  </>
);
