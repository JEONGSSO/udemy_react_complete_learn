import { createContext, useContext, useState, useMemo, useEffect } from 'react';

import { formatDollar } from '@/modules';

const pricePerItem: any = {
  scoops: 2,
  toppings: 1.5,
};

const OrderDetails = createContext(null);

export const useOrderDetails = () => {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error('useOrderDetails context error');
  }

  return context;
};

const calculateSubtotal = (optionType: string, optionCounts: any) => {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }
  return optionCount * pricePerItem[optionType];
};

export const OrderDetailsProvider = (props: any) => {
  const [optionCounts, setOptionCounts] = useState<any>({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatDollar(0);
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
    const grandTotal = scoopSubtotal + toppingsSubtotal;

    setTotals({
      scoops: formatDollar(scoopSubtotal),
      toppings: formatDollar(toppingsSubtotal),
      grandTotal: formatDollar(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (
      itemName: string,
      newItemCount: number,
      optionType: string
    ) => {
      const newOptionCounts = { ...optionCounts };
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, newItemCount);

      setOptionCounts(newOptionCounts);
    };

    const resetOrder = () => {
      setOptionCounts({
        scoops: new Map(),
        toppings: new Map(),
      });
    };

    return [{ ...optionCounts, totals }, updateItemCount, resetOrder];
  }, [optionCounts, totals]);

  return <OrderDetails.Provider value={value} {...props} />;
};
