/* eslint-disable react/prop-types */
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

export const ListView = ({ products }) => {
  return (
    <section className="grid gap-y-12">
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article
            key={id}
            className="grid lg:grid-cols-for-list gap-x-8 items-center justify-center"
          >
            <img
              src={image}
              alt={name}
              className="block w-full lg:w-[300px] h-[200px] object-cover radius mb-4"
            />
            <div>
              <h4 className="mb-2 font-bold">{name}</h4>
              <h5 className="price text-primary-6 mb-3  font-bold">
                {formatPrice(price)}
              </h5>
              <p className="max-w-[45em] mb-4">
                {description.substring(0, 150)}...
              </p>
              <Link
                to={`/products/${id}`}
                className="btn !text-[.5rem] !py-1 !px-2"
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
