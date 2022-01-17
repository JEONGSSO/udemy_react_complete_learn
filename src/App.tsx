import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Header } from './layout';
import routes from './routes';
import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import Test from '@/components/table/Test';
import { Shop, CollectionPreview, SignPage } from '@/components/shop';

import './App.scss';

export default () => {
  const Main = useRoutes([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/counter',
      element: <Counter />,
    },
    {
      path: '/table',
      element: <Test />,
    },
    {
      path: '/monsters',
      element: <Monsters />,
    },
    {
      path: '/shop',
      element: <Shop />,
      children: [
        {
          path: '/shop/hats',
          element: <Login />,
        },
        {
          path: '/shop/jackets',
          element: <Login />,
        },
        {
          path: '/shop/sneakers',
          element: <Login />,
        },
        {
          path: '/shop/womens',
          element: <Login />,
        },
        {
          path: '/shop/mens',
          element: <Login />,
        },
        {
          path: '/shop/collection',
          element: <CollectionPreview />,
        },
        {
          path: '/shop/signin',
          element: <SignPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <Header />
      <main>{Main}</main>
      <footer>Footer</footer>
    </>
  );
};
