import { graphql } from 'msw';

export const handlers = [
  graphql.query('toppings', (req, res, ctx) => {
    return res(
      ctx.data([
        { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
        { name: 'Cherries', imagePath: '/images/cherries.png' },
        { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
      ])
    );
  }),
];
