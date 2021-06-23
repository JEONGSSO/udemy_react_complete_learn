import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import ShopHeader from '@/components/shop/ShopHeader';

const RouteWithSubRoutes = (route: any) => {
  const location = useLocation();

  const matchChildRoute = route.routes?.find(
    (r: any) => r.path === location.pathname
  );

  return (
    <Route path={route.path} exact={route.exact}>
      {location.pathname.includes('shop') && <ShopHeader />}
      {matchChildRoute ? <matchChildRoute.component /> : <route.component />}
    </Route>
  );
};

export default RouteWithSubRoutes;
