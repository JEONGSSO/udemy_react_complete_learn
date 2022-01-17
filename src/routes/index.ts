import { RouteObject } from 'react-router-dom';

type RoutesProps = RouteObject & {
  name: string;
};

const routes: RoutesProps[] = [
  {
    name: 'login',
    path: '/login',
  },
  {
    name: 'counter',
    path: '/counter',
  },
  {
    name: 'table',
    path: '/table',
  },
  {
    name: 'monsters',
    path: '/monsters',
  },
  {
    name: 'shop',
    path: '/shop',
  },
];

export default routes;
