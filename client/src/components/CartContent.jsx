import { useDispatch, useSelector } from "react-redux";
import { CartColumns } from "./CartColumns";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import { CartTotals } from "./CartTotals";
import { useEffect } from "react";
import { setCartTotals, setClearCartItem } from "../features/cart/cartSlice";

export const CartContent = () => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClearCartItem = () => {
    dispatch(setClearCartItem());
  };

  useEffect(() => {
    dispatch(setCartTotals());
    localStorage.setItem("cart", JSON.stringify(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <section className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className="flex justify-between mt-8">
        <Link
          to="/products"
          className="bg-transparent border-transparent capitalize py-1 px-2 bg-primary-5 text-white radius tracking-widest font-normal cursor-pointer"
        >
          continue shopping
        </Link>
        <button
          type="button"
          className="bg-transparent border-transparent capitalize py-1 px-2 text-white radius tracking-widest font-normal cursor-pointer clear-btn bg-black"
          onClick={handleClearCartItem}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};
