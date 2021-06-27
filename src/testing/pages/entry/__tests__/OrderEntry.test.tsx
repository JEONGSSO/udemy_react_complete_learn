import { render, screen } from '@/test-utils/testing-library-utils';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

import OptionEntry from '../OptionEntry';

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

    render(<OptionEntry />);

    const alerts = await screen.findAllByText(/An unexpected error ocurred/i);

    expect(alerts).toHaveLength(1);
  });
});
