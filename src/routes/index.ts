import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import Test from '@/components/table/Test';
import { Shop, CollectionPreview, SignPage } from '@/components/shop';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'counter',
    path: '/counter/:id?',
    component: Counter,
  },
  {
    name: 'table',
    path: '/table',
    component: Test,
  },
  {
    name: 'monsters',
    path: '/monsters',
    component: Monsters,
  },
  {
    name: 'shop',
    path: '/shop',
    component: Shop,
    routes: [
      {
        name: 'hats',
        path: '/shop/hats',
        component: Login,
      },
      {
        name: 'jackets',
        path: '/shop/jackets',
        component: Login,
      },
      {
        name: 'sneakers',
        path: '/shop/sneakers',
        component: Login,
      },
      {
        name: 'womens',
        path: '/shop/womens',
        component: Login,
      },
      {
        name: 'mens',
        path: '/shop/mens',
        component: Login,
      },
      {
        name: 'collection',
        path: '/shop/collection',
        component: CollectionPreview,
      },
      {
        name: 'signin',
        path: '/shop/signin',
        component: SignPage,
      },
    ],
  },
];
