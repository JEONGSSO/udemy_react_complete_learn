import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { useOrderDetails } from '@/contexts/OrderDetails';

import { formatDollar } from '@/modules';
import { getToppings } from './toppings.query';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

type Items = {
  name: string;
  imagePath: string;
}[];

const Options = ({ optionType }: { optionType: string }) => {
  const [orderDetails, updateItemCount]: any = useOrderDetails();
  const [fetchToppings, { data: items, loading, error }] =
    useLazyQuery<Items>(getToppings);

  useEffect(() => {
    fetchToppings();
  }, [optionType]);

  const pricePerItem: Record<string, number> = {
    scoops: 2,
    toppings: 1.5,
  };

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  return (
    <>
      <h2>{title}</h2>
      <p>{formatDollar(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      {items?.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
          optionType={optionType}
          updateItemCount={(itemName: any, newItemCount: any) =>
            updateItemCount(itemName, newItemCount, optionType)
          }
        />
      ))}
      {error && <div role="alert">An unexpected error ocurred</div>}
    </>
  );
};

export default Options;
