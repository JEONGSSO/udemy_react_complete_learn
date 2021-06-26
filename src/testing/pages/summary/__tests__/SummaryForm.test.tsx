import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SummaryForm from '../SummaryForm';

describe.skip('Summary Form Test', () => {
  it('initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  it('Checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  it('popover responds to hover', async () => {
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );

    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument(); // 모범사례 (읽기 쉽게 만들어준다고 한다.)

    userEvent.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
