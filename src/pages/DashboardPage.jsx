import { Link } from "react-router-dom";
import { Dashboard, PageHero } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../features/cart/cartApiSlice";
import useTitle from "../hooks/useTitle";

export const DashboardPage = () => {
  const { orders } = useSelector((state) => state.cart);
  useTitle(`Your ${orders.length} Cart List`);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-auto">
      <PageHero title="Dashboard" />
      <section className="section section-center">
        <div className="flex items-center justify-center">
          {orders.length ? (
            <div className="min-h-[54vh] flex flex-col gap-3">
              {orders.length &&
                orders.map((order) => (
                  <Dashboard key={order.id} order={order} />
                ))}
            </div>
          ) : (
            <div className="h-[55vh] text-center pt-36">
              <h2 className="mb-10">your cart is empty</h2>
              <Link to="/products" className="btn">
                fill it
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
