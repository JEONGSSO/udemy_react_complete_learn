import { graphql } from 'msw';

// only ApolloProvider using
export const handlers = [
  // graphql.query('GetExchangeRates', (req, res, ctx) => {
  //   return res(
  //     ctx.data({
  //       rates: [
  //         { __typename: 'ExchangeRate', currency: 'AED', rate: '3.6732' },
  //         { __typename: 'ExchangeRate', currency: 'AFN', rate: '85.815' },
  //         { __typename: 'ExchangeRate', currency: 'ALL', rate: '103.266298' },
  //       ],
  //     })
  //   );
  // }),
  // graphql.query('toppings', (req, res, ctx) => {
  //   return res(
  //     ctx.data([
  //       { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
  //       { name: 'Cherries', imagePath: '/images/cherries.png' },
  //       { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
  //     ])
  //   );
  // }),
];
