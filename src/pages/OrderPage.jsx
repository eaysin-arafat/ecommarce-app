import { useLocation } from "react-router-dom";
import { OrderFail, OrderSuccess, PageHero } from "../components";

export const OrderPage = () => {
  const { state } = useLocation();
  console.log(state.data.cartList[0].id);

  return (
    <main className="page">
      <PageHero title="payment" />
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
