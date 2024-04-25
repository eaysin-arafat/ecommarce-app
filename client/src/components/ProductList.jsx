import { useSelector } from "react-redux";
import { ListView } from "./ListView";
import { GridView } from "./GridView";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const ProductList = () => {
  const {
    products_loading: loading,
    products_error: error,
    filtered_products: products,
    grid_view,
  } = useSelector((state) => state.product);

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
