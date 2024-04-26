/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  setRemoveCartItem,
  setToggleCartAmount,
} from "../../features/cart/cartSlice";
import { formatPrice } from "../../utils/helpers";
import { FaTrash } from "react-icons/fa";
import { AmountButtons } from "../products/AmountButtons";

export const CartItem = ({ id, image, name, color, price, amount }) => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(setToggleCartAmount({ id, value: "inc" }));
  };

  const decrease = () => {
    dispatch(setToggleCartAmount({ id, value: "dec" }));
  };

  const handleRemoveCartItem = (id) => {
    dispatch(setRemoveCartItem(id));
  };

  return (
    <article className="grid grid-cols-for-cart-totals grid-rows-[75px] gap-y-12 gap-x-4 justify-center mb-12 items-center md:grid md:grid-cols-for-total-lg md:items-center lg:grid lg:grid-cols-for-total-lg lg:items-center">
      <div className="title grid-rows-[75px] grid grid-cols-for-title items-center text-left gap-4 md:h-full md:grid md:grid-cols-for-title-lg md:items-center md:gap-4 md:text-left lg:h-full lg:grid lg:grid-cols-for-title-lg lg:items-center lg:gap-4 lg:text-left">
        <img
          src={image}
          alt={name}
          className="w-full h-full block radius object-cover"
        />
        <div>
          <h5 className="name flex items-start text-xs mb-0 lg:text-[.85rem]">
            {name}
          </h5>
          <p className="color text-grey-5 text-xs tracking-widest capitalize mb-0 flex items-center justify-start lg:text-[0.85rem] md:text-[0.85rem]">
            color:
            <span
              style={{ background: color }}
              className="inline-block w-2 h-2 bg-red-dark ml-2 rounded-full lg:w-3 lg:h-3"
            ></span>
          </p>
          <h5 className="price-small flex items-start text-primary-5 lg:hidden">
            {formatPrice(price)}
          </h5>
        </div>
      </div>

      <h5 className="price hidden md:block md:text-base md:text-primary-5 lg:block lg:text-base lg:text-primary-5 font-normal">
        {formatPrice(price)}
      </h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal hidden lg:block lg:mb-0 lg:text-grey-5 lg:font-normal lg:text-base md:block md:mb-0 md:text-grey-5 md:font-normal md:text-base">
        {formatPrice(price * amount)}
      </h5>
      <button
        type="button"
        className="remove-btn text-white bg-transparent border-transparent tracking-widest bg-red-dark w-6 h-6 flex items-center justify-center radius text-xs cursor-pointer"
        onClick={() => handleRemoveCartItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};
