/* eslint-disable react/prop-types */
import { Product } from "./Product";

export const GridView = ({ products }) => {
  return (
    <section>
      <div className="products-container grid gap-y-8 gap-x-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};
