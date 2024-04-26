import { useSelector } from "react-redux";
import { Loading } from "../core/Loading";
import { ListView } from "./ListView";
import { GridView } from "./GridView";

export const ProductList = () => {
  const {
    products_loading: loading,
    products_error: error,
    filtered_products: products,
    grid_view,
  } = useSelector((state) => state.product);

  if (loading && !products.length) {
    return <Loading />;
  }

  if (!products.length && !loading) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }

  if (error) {
    return <Error />;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
