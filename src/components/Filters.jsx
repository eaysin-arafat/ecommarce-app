import React from "react";
import { useSelector } from "react-redux";
import { getUniqueValues } from "../utils/helpers";

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
    <section>
      <div className="content">
        <form action="" onSubmit={(e) => e.preventDefault()}></form>
      </div>
    </section>
  );
};
