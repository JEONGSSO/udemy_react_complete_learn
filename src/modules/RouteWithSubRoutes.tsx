import React from 'react';
import { Route, useLocation } from 'react-router-dom';

const RouteWithSubRoutes = (route: any) => {
  const location = useLocation();

  const matchChildRoute = route.routes?.find(
    (r: any) => r.path === location.pathname
  );

  return (
    <Route path={route.path} exact={route.exact}>
      {matchChildRoute ? <matchChildRoute.component /> : <route.component />}
    </Route>
  );
};

export default RouteWithSubRoutes;
