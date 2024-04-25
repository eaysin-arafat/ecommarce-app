import { OrderSuccess, PageHero } from "../components";

export const OrderPage = () => {
  return (
    <main className="page">
      <PageHero title="payment" />
      {<OrderSuccess />}
    </main>
  );
};
