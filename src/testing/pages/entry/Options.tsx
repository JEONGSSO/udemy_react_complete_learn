import React, { useEffect, useState } from 'react';

import { useOrderDetails } from '@/contexts/OrderDetails';

import { fetchData, formatDollar } from '@/modules';
import ScoopOption from './ScoopOption';

const Options = ({ optionType }: { optionType: string }) => {
  const [items, setItems] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [orderDetails, updateItemCount]: any = useOrderDetails();

  const fetchItems = async (): Promise<void> => {
    const data = await fetchData(`http://localhost:3030/${optionType}`).catch(
      (_) => {
        setError(true);
        return [];
      }
    );

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, [optionType]);

  const pricePerItem: any = {
    scoops: 2,
    toppings: 1.5,
  };

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  return (
    <>
      <h2>{title}</h2>
      <p>{formatDollar(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      {items.map((item: any) => (
        <ScoopOption
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
