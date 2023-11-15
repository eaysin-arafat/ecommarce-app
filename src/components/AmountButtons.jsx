/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";

export const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="grid w-[140px] justify-center grid-cols-3 items-center">
      <button className="amount-btn" onClick={decrease} type="button">
        <FaMinus />
      </button>
      <h2 className="mb-0">{amount}</h2>
      <button
        type="button"
        className="amount-btn bg-transparent border-transparent cursor-pointer py-4 px-0 w-8 h-4 flex items-center justify-center"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};
