import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.product);

  if (cart.length < 1) {
    return (
      <main className="page-100 mt-60">
        <div className="text-center">
          <h2 className="mb-4 transform-none">Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <main className="page">
        <CartContent />
      </main>
    </main>
  );
};
