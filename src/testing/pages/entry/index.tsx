// import React, { useState } from 'react';

// import OptionEntry from './OptionEntry';
// import OrderSummary from '../summary/OrderSummary';
// import { OrderDetilsProvider } from '@/contexts/OrderDetails';

// const EntryApp = () => {
//   const [orderPhase, setOrderPhase] = useState('inProgress');

//   let Component = OptionEntry; // default to order page
//   switch (orderPhase) {
//     case 'inProgress':
//       Component = OptionEntry;
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
//     <OrderDetilsProvider>
//       {<Component setOrderPhase={setOrderPhase} />}
//     </OrderDetilsProvider>
//   );
// };

// export default EntryApp;
