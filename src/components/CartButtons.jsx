/* eslint-disable react/prop-types */
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartButtons = ({ style }) => {
  const myUser = true;
  return (
    <div className={`${style}`}>
      <Link
        to="/cart"
        className="cart-btn text-grey-1 text-lg font-semibold leading-loose flex items-center"
      >
        Cart
        <span className="cart-container flex items-center relative">
          <FaShoppingCart className="h-[1.6rem] ml-[5px]" />
          <span className="cart-value absolute -top-[10px] -right-4 bg-primary-5 w-4 h-4 flex items-center justify-center rounded-full text-xs text-white p-3">
            15
          </span>
        </span>
      </Link>

      {myUser ? (
        <button
          type="button"
          className="auth-btn flex items-center bg-transparent border-transparent cursor-pointer text-grey-1 leading-loose text-lg font-semibold"
        >
          Logout <FaUserMinus className="ml-[5px]" />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose"
        >
          Login <FaUserPlus className="ml-[5px]" />
        </button>
      )}
    </div>
  );
};
