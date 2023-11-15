import { useSelector } from "react-redux";
import { CartColumns } from "./CartColumns";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { CartTotals } from "./CartTotals";

export const CartContent = () => {
  const { cart } = useSelector((state) => state.product);

  return (
    <section className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="flex justify-between mb-8">
        <Link
          to="/products"
          className="bg-transparent border-transparent capitalize py-1 px-2 bg-primary-5 text-white radius tracking-widest font-normal cursor-pointer"
        >
          continue shopping
        </Link>
        <button
          type="button"
          className="bg-transparent border-transparent capitalize py-1 px-2 text-white radius tracking-widest font-normal cursor-pointer clear-btn bg-black"
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};
