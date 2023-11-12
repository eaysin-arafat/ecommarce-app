/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "./../utils/helpers";

export const Product = ({ image, name, price, id }) => {
  return (
    <article>
      <div className="relative group bg-black radius">
        <img
          src={image}
          alt={name}
          className={`w-full h-56 block object-cover radius transition-default group-hover:opacity-50`}
        />
        <Link
          to={`/products/${id}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-5 flex items-center justify-center w-10 h-10 rounded-full transition-default opacity-0 cursor-pointer group-hover:opacity-100"
        >
          <FaSearch className="text-lg text-white" />
        </Link>
      </div>

      <footer className="mt-4 flex justify-between items-center">
        <h5 className="mb-0 font-normal">{name}</h5>
        <p className="text-primary-5 tracking-widest">{formatPrice(price)}</p>
      </footer>
    </article>
  );
};
