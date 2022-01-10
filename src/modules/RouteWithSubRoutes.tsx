// import React from 'react';
// import { Route, useLocation } from 'react-router-dom';

// import routes from '@/routes';
// import ShopHeader from '@/components/shop/ShopHeader';

// const RouteWithSubRoutes = (route: typeof routes[0]) => {
//   const location = useLocation();

//   const matchChildRoute = route.routes?.find(
//     (r) => r.path === location.pathname
//   );

//   return (
//     <Route path={route.path}>
//       {location.pathname.includes('shop') && <ShopHeader />}
//       {matchChildRoute ? <matchChildRoute.component /> : <route.component />}
//     </Route>
//   );
// };

// export default RouteWithSubRoutes;
