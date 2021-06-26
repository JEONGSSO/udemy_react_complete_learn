import {
  render,
  screen,
  waitFor,
} from '../../../../test-utils/testing-library-utils';
import Options from '../Options';

describe('total update Test', () => {
  it('update scoop subtotal when scoops change', async () => {
    render(<Options optionType="scoops" />);

    const scoopsSubtotal = screen.getByText('Scoops total: $', {
      exact: false,
    });

    // When testing, code that causes React state updates should be wrapped into act(...):

    await waitFor(() => expect(scoopsSubtotal).toHaveTextContent('0.00'));
  });
});
