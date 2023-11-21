import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageHero } from "./../components/PageHero";
import { Checkout } from "../components";

export const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.product);

  return (
    <main className="h-[92vh]">
      <PageHero title="checkout" />
      <div className="flex items-center justify-center">
        {cart.length < 1 ? (
          <div className="text-center pt-60">
            <h2 className="mb-10">your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <Checkout />
        )}
      </div>
    </main>
  );
};
