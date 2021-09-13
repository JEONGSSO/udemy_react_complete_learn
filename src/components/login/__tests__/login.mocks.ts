import { EXCHANGE_RATES } from '../query';
import { MockedResponse } from '@apollo/react-testing';

// const mocks: MockedResponse[] = [
//   {
//     request: { query: EXCHANGE_RATES },
//     result: {
//       data: {
//         rates: [
//           { currency: 'AED', rate: '3.6732' },
//           { currency: 'AFN', rate: '85.815' },
//           { currency: 'ALL', rate: '103.266298' },
//         ],
//       },
//     },
//   },
// ];

const mocks: MockedResponse[] = [
  {
    request: {
      query: EXCHANGE_RATES,
      variables: {
        currency: 'USD',
      },
    },
    result: {
      data: {
        rates: [
          { currency: 'AED', rate: '1' },
          { currency: 'AFN', rate: '2' },
          { currency: 'ALL', rate: '3' },
        ],
      },
    },
  },
];

export default mocks;
