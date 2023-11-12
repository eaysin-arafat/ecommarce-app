import { useDispatch, useSelector } from "react-redux";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { setGridView, setListView } from "../features/products/productSlice";

export const Sort = () => {
  const { filtered_products: products, sort } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  const handleListView = () => {
    dispatch(setListView());
  };

  const handleGridView = () => {
    dispatch(setGridView());
  };

  return (
    <section className="grid grid-cols-1 lg:items-center mb-8 gap-y-3 lg:grid lg:grid-cols-for-sort lg:gap-x-8 md:grid md:grid-cols-for-sort md:gap-y-3">
      <div className="grid grid-cols-2 gap-x-2 w-[50px] lg:grid lg:grid-cols-2 lg:gap-x-2 ">
        <button
          type="button"
          className="bg-transparent border border-black text-black radius w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={handleGridView}
        >
          <BsFillGridFill className="lg:text-base" />
        </button>
        <button
          type="button"
          className="bg-transparent border border-black text-black radius w-6 h-6 flex items-center justify-center cursor-pointer"
          onClick={handleListView}
        >
          <BsList className="lg:text-base" />
        </button>
      </div>

      <p className="capitalize mb-0">{products.length} products found</p>

      <hr />

      <form action="">
        <label
          htmlFor="sort"
          className="text-base capitalize inline-block mr-2"
        >
          sory by :
        </label>
        <select
          name="sort"
          id="sort"
          className="border-transparent text-base capitalize py-1 px-2"
        >
          <option value="default">default</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  );
};
