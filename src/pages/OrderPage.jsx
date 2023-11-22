import { OrderFail, OrderSuccess, PageHero } from "../components";
import { useSelector } from "react-redux";

export const OrderPage = () => {
  const { order_state } = useSelector((state) => state.cart);

  return (
    <main className="page">
      <PageHero title="payment" />
      {order_state ? <OrderSuccess /> : <OrderFail />}
    </main>
  );
};
