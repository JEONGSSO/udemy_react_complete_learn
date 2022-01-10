import { RouteProps } from 'react-router-dom';

import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import Test from '@/components/table/Test';
import { Shop, CollectionPreview, SignPage } from '@/components/shop';

type RoutesProps = RouteProps & {
  name: string;
  routes?: RoutesProps[];
};

const routes: RoutesProps[] = [
  {
    name: 'login',
    path: '/login',
    element: Login,
  },
  {
    name: 'counter',
    path: '/counter/:id?',
    element: Counter,
  },
  {
    name: 'table',
    path: '/table',
    element: Test,
  },
  {
    name: 'monsters',
    path: '/monsters',
    element: Monsters,
  },
  // {
  //   name: 'shop',
  //   path: '/shop',
  //   element: Shop,
  //   routes: [
  //     {
  //       name: 'hats',
  //       path: '/shop/hats',
  //       element: Login,
  //     },
  //     {
  //       name: 'jackets',
  //       path: '/shop/jackets',
  //       element: Login,
  //     },
  //     {
  //       name: 'sneakers',
  //       path: '/shop/sneakers',
  //       element: Login,
  //     },
  //     {
  //       name: 'womens',
  //       path: '/shop/womens',
  //       element: Login,
  //     },
  //     {
  //       name: 'mens',
  //       path: '/shop/mens',
  //       element: Login,
  //     },
  //     {
  //       name: 'collection',
  //       path: '/shop/collection',
  //       element: CollectionPreview,
  //     },
  //     {
  //       name: 'signin',
  //       path: '/shop/signin',
  //       element: SignPage,
  //     },
  //   ],
  // },
];

export default routes;
