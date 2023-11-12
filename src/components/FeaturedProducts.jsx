import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Product } from "./Product";

export const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useSelector((state) => state.product);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="section bg-grey-10">
      <div className="title mb-8">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center my-16 mx-auto gird gap-10 lg:grid lg:grid-cols-3">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link
        to="/products"
        className="btn !block w-[148px] my-0 mx-auto !text-center mt-4"
      >
        all products
      </Link>
    </section>
  );
};
