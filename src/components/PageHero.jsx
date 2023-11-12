/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const PageHero = ({ title, product }) => {
  return (
    <section className="bg-primary-10 w-full min-h-[20vh] flex items-center text-primary-1">
      <div className="section-center">
        <h3 className="font-bold">
          <Link
            to="/"
            className="text-primary-3 p-2 transition-default hover:text-primary-1"
          >
            Home
          </Link>
          {product && (
            <Link
              to="/products"
              className="text-primary-3 p-2 transition-default hover:text-primary-1"
            >
              / Products
            </Link>
          )}
          / {title}
        </h3>
      </div>
    </section>
  );
};
