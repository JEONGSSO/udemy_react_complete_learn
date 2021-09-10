import { render, screen } from '@testing-library/react';

import Options from '../Options';

describe.skip('options render Test', () => {
  it('display image scoops option from server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages: HTMLElement[] = await screen.findAllByRole('img', {
      name: /scoops$/i, // ima 태그에선 alt가 name에 걸린다
    });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((elem: any) => elem.alt);
    expect(altText).toEqual(['Chocolate scoops', 'Vanilla scoops']);
  });

  it('display image toppings option from server', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages: HTMLElement[] = await screen.findAllByRole('img', {
      name: /toppings$/i,
    });
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((elem: any) => elem.alt);
    expect(altText).toEqual([
      'M&Ms toppings',
      'Cherries toppings',
      'Hot fudge toppings',
    ]);
  });
});
