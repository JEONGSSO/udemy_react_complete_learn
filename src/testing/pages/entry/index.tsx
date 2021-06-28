// import React, { useState } from 'react';

// import OrderEntry from './OrderEntry';
// import OrderSummary from '../summary/OrderSummary';
// import { OrderDetailsProvider } from '@/contexts/OrderDetails';

// const EntryApp = () => {
//   const [orderPhase, setOrderPhase] = useState('inProgress');

//   let Component = OrderEntry; // default to order page
//   switch (orderPhase) {
//     case 'inProgress':
//       Component = OrderEntry;
//       break;
//     case 'review':
//       Component = OrderSummary;
//       break;
//       // case 'completed':
//       //   Component = OrderConfirmation;
//       break;
//     default:
//   }

//   return (
//     <OrderDetailsProvider>
//       {<Component setOrderPhase={setOrderPhase} />}
//     </OrderDetailsProvider>
//   );
// };

// export default EntryApp;
