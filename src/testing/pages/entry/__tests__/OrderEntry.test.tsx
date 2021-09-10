import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

import OrderEntry from '../OrderEntry';

describe.skip('order Test', () => {
  it('handle error for scoop and toppings routes', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
        res(ctx.status(500))
      ),
      rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    render(<OrderEntry />);

    const alerts = await screen.findAllByText(/An unexpected error ocurred/i);

    expect(alerts).toHaveLength(1);
  });
});
