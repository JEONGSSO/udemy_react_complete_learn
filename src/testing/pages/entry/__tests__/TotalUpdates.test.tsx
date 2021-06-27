import { render, screen, waitFor } from '@/test-utils/testing-library-utils';

import Options from '../Options';

describe('total update Test', () => {
  it('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />);

    const scoopsSubtotal = await screen.findByText('Scoops total: $', {
      exact: false,
    });
    await waitFor(() => expect(scoopsSubtotal).toHaveTextContent('0.00'));
  });
});
