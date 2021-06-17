import { Login } from '@/components/login';
import { Counter } from '@/components/counter';
import { Monsters } from '@/components/monsters';

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
];
