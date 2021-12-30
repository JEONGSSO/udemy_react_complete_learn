import { useOrderDetails } from '@/contexts/OrderDetails';
import Options from './Options';

const OrderEntry = ({
  setOrderPhase,
}: {
  setOrderPhase?: (type: string) => void;
}) => {
  const [orderDetails]: any = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <>
      <h1>Design Your Sundae!</h1>
      <Options optionType={'scoops'} />
      <Options optionType={'toppings'} />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <button
        disabled={orderDisabled}
        onClick={() => setOrderPhase?.('review')}
      >
        Order Sundae!
      </button>
    </>
  );
};

export default OrderEntry;
