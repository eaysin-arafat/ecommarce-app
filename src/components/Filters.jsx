/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import {
  clearFilter,
  setFilterProduct,
  setUpdateFilter,
} from "../features/products/productSlice";
import { useEffect } from "react";

export const Filters = () => {
  const dispatch = useDispatch();
  const {
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    products,
    filters,
  } = useSelector((state) => state.product);

  const categories = getUniqueValues(products, "category");
  const companyes = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  useEffect(() => {
    dispatch(setFilterProduct());
  }, [products, filters]);

  const handleUpdateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "color") {
      value = e.target.value;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatch(setUpdateFilter({ name, value }));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <section className="sticky top-8">
      <div className="sticky top-4">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="from-control !mb-5 ">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input pl-2 bg-grey-10 radius border-transparent leading-loose placeholder:capitalize w-full"
              value={text}
              onChange={handleUpdateFilters}
            />
          </div>

          {/* categories */}
          <div className="from-control mb-5">
            <h5 className="!mb-2">category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  name="category"
                  type="button"
                  className={`block my-[.25em] mx-0 capitalize bg-transparent leading-loose text-grey-5 cursor-pointer ${
                    category === c.toLowerCase()
                      ? "border-b border-b-grey-5"
                      : null
                  }`}
                  value={c}
                  onClick={handleUpdateFilters}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* companies */}
          <div className="from-control mb-5">
            <h5 className="mb-3">company</h5>
            <select
              name="company"
              value={company}
              className="compnay bg-grey-10 radius border-transparent p-1"
              onChange={handleUpdateFilters}
            >
              {companyes.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* colors */}
          <div className="from-control mb-5">
            <h5 className="mb-2">colors</h5>

            <div className="colors flex items-center">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      value="all"
                      className={`flex items-center justify-center mr-2 opacity-50 capitalize ${
                        color === "all" ? "all-btn !opacity-100 underline" : ""
                      }`}
                      onClick={handleUpdateFilters}
                    >
                      all
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`w-4 h-4 rounded-full bg-[#222] mr-2 border-none cursor-pointer opacity-50 flex items-center justify-center ${
                      color === c ? "!opacity-100" : ""
                    }`}
                    value={c}
                    onClick={handleUpdateFilters}
                  >
                    {color === c ? (
                      <FaCheck className="text-xs text-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* price */}

          <div className="from-control mb-5">
            <h5 className="mb-2">price</h5>

            <p className="price mb-1">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
              onChange={handleUpdateFilters}
            />
          </div>

          {/* shipping */}
          <div className="from-control mb-5 shipping grid grid-cols-for-list items-center capitalize gap-x-2 text-base max-w-[200px]">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={handleUpdateFilters}
            />
          </div>
        </form>

        <button
          type="button"
          className="clear-btn bg-red-dark text-white py-1 px-2 radius"
          onClick={handleClearFilter}
        >
          clear filters
        </button>
      </div>
    </section>
  );
};
