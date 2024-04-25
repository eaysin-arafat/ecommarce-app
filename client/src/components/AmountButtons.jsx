/* eslint-disable react/prop-types */
import { FaMinus, FaPlus } from "react-icons/fa";

export const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <div className="grid w-[140px] lg:w-[75px] justify-center grid-cols-3 items-center">
      <button
        className="amount-btn w-4 h-2 text-xs"
        onClick={decrease}
        type="button"
      >
        <FaMinus />
      </button>
      <h2 className="text-base mb-0">{amount}</h2>
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
