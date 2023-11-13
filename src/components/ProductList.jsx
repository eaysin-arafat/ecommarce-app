import { useSelector } from "react-redux";
import { ListView } from "./ListView";
import { GridView } from "./GridView";

export const ProductList = () => {
  const { filtered_products: products, grid_view } = useSelector(
    (state) => state.product
  );

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};
