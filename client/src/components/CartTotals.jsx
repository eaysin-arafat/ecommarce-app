import { useSelector } from "react-redux";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

export const CartTotals = () => {
  const { total_amount, shipping_fee } = useSelector((state) => state.cart);

  const myUser = true;
  return (
    <section className="mt-12 flex flex-col md:flex md:items-end">
      <div className="flex flex-col">
        <article className="border border-grey-8 radius py-6 px-12 ">
          <h5 className="grid grid-cols-for-product">
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="grid grid-cols-for-product capitalize">
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className="grid grid-cols-for-product mt-8 font-bold">
            ordar total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>

        {myUser ? (
          <Link to="/checkout" className="btn mt-4 lg:text-center lg:font-bold">
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className="btn lg:mt-4 lg:text-center lg:font-bold"
          >
            login
          </button>
        )}
      </div>
    </section>
  );
};
