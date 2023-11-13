import React from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { formatPrice, getUniqueValues } from "../utils/helpers";

export const Filters = () => {
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
  } = useSelector((state) => state.product);

  const categories = getUniqueValues(products, "category");
  const companyes = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  return (
    <section className="sticky top-8">
      <div className="sticky top-4">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="from-control !mb-5">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input p-2 bg-grey-10 radius border-transparent leading-loose placeholder:capitalize"
              value={text}
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
                      data-color="all"
                      className={`flex items-center justify-center mr-2 opacity-50 capitalize ${
                        color === "all" ? "all-btn !opacity-100 underline" : ""
                      }`}
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
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                  >
                    {color === c ? (
                      <FaCheck className="text-sm text-white" />
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
            />
          </div>
        </form>

        <button
          type="button"
          className="clear-btn bg-red-dark text-white py-1 px-2 radius"
        >
          clear filters
        </button>
      </div>
    </section>
  );
};
