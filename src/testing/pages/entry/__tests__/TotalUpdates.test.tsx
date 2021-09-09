import { render, screen, waitFor } from '@/test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

import Options from '../Options';

describe.skip('total update Test', () => {
  it('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />);

    const scoopsSubtotal = await screen.findByText('Scoops total: $', {
      exact: false,
    });
    waitFor(() => expect(scoopsSubtotal).toHaveTextContent('0.00'));
  });

  it('update scoop subtotal when toppings change', async () => {
    render(<Options optionType="toppings" />);

    const ToppingsSubtotal = await screen.findByText('Toppings total: $', {
      exact: false,
    });
    await waitFor(() => expect(ToppingsSubtotal).toHaveTextContent('0.00'));

    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });

    userEvent.click(cherriesCheckbox);
    expect(ToppingsSubtotal).toHaveTextContent('1.50');

    const hotFudgeCheckbox = screen.getByRole('checkbox', {
      name: 'Hot fudge',
    });

    userEvent.click(hotFudgeCheckbox);
    expect(ToppingsSubtotal).toHaveTextContent('3.00');

    // remove hot fudge check
    userEvent.click(hotFudgeCheckbox);
    expect(ToppingsSubtotal).toHaveTextContent('1.50');
  });
});
