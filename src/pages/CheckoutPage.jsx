import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PageHero } from "./../components/PageHero";
import { CartContent } from "./../components/CartContent";
import { StripeCheckout } from "../components";

export const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.product);

  return (
    <main>
      <PageHero title="checkout" />
      <div className="page section section-center flex  items-center justify-center">
        {cart.length < 1 ? (
          <div className="empty  text-center">
            <h2 className="mb-10">your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div className="empty text-center">
            <h2 className="mb-10">{cart.length} products</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};
