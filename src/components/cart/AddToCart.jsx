/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAddToCart, setRemoveCartItem } from "../../features/cart/cartSlice";
import { AmountButtons } from "../products/AmountButtons";

export const AddToCart = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(setAddToCart({ id, mainColor, amount, product }));
  };

  const handleRemoveCartItem = (id) => {
    dispatch(setRemoveCartItem(id));
  };

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  useEffect(() => {
    const productInCart = cart.find((item) => {
      return item.id === product.id + mainColor;
    });
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, product.id]);

  return (
    <section className="mt-8">
      {inCart ? (
        <button
          className="btn"
          onClick={() => handleRemoveCartItem(product.id + mainColor)}
        >
          remove from cart
        </button>
      ) : (
        <Fragment>
          <div className="colors grid grid-cols-for-cart-color items-center mb-4">
            <span className="capitalize font-bold">colors:</span>
            <div className="flex">
              {colors.map((color, index) => (
                <button
                  key={index}
                  style={{ background: color }}
                  className={`w-6 h-6 rounded-full bg-[#222] mr-2 border-none cursor-pointer opacity-50 flex items-center justify-center ${
                    mainColor === color ? "!opacity-100" : null
                  }`}
                  onClick={() => setMainColor(color)}
                >
                  {mainColor === color ? (
                    <FaCheck className="text-xs text-white" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="btn-container mt-8">
            <AmountButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
            <Link
              to="/cart"
              className="btn !mt-4 w-[140px]"
              onClick={handleAddToCart}
            >
              add to cart
            </Link>
          </div>
        </Fragment>
      )}
    </section>
  );
};
