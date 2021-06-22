import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';
import { Shop } from '@/components/shop';

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
  },
  {
    name: 'counter',
    path: '/counter',
    component: Counter,
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
    ],
  },
];
