import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import useTitle from "../hooks/useTitle";

export const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  useTitle(`Carts`);

  if (cart.length < 1) {
    return (
      <main className="page-100 pt-60">
        <div className="text-center mt-28">
          <h2 className="mb-4 transform-none">Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <PageHero title="cart" />
      <main className="page">
        <CartContent />
      </main>
    </main>
  );
};
