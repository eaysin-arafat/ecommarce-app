/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AmountButtons } from "./AmountButtons";
import { Link } from "react-router-dom";
import { setAddToCart } from "../features/products/productSlice";

export const AddToCart = ({ product }) => {
  console.log(product);
  const { id, stock, colors } = product;
  console.log(id, stock);
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(setAddToCart({ id, mainColor, amount, product }));
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

  return (
    <section className="mt-8">
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
    </section>
  );
};
