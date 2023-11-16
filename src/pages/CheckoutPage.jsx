import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageHero } from "./../components/PageHero";
import { StripeCheckout } from "../components";

export const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.product);

  return (
    <main className="h-[100vh]">
      <PageHero title="checkout" />
      <div className="page flex items-center justify-center">
        {cart.length < 1 ? (
          <div className="text-center">
            <h2 className="mb-10">your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};
