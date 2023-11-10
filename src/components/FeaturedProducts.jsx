import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  return (
    <section className="section bg-grey-10">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center my-16 mx-auto gird gap-10 lg:grid-flow-col">
        {
          // featured.map((product) => {
          // })
        }
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
