import { createSlice } from "@reduxjs/toolkit";
import { allProducts, singleProduct } from "./productApiSlice";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},

    // filter state
    filtered_products: [],
    grid_view: true,
    sort: "deafult",
    filters: {
      text: "",
      company: "all",
      category: "all",
      color: "all",
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    },
  },
  reducers: {
    setGridView: (state, action) => {
      state.grid_view = true;
    },
    setListView: (state, action) => {
      state.grid_view = false;
    },
    setUpdateSort: (state, action) => {
      state.sort = action.payload;
      console.log(state.products);
    },
    setSortProduct: (state, action) => {
      const { sort, filtered_products } = state;
      console.log(sort, state.products);

      let tempProducts = filtered_products;

      if (sort === "price_lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price_highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      state.filtered_products = tempProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProducts.pending, (state, action) => {
        state.products_loading = true;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        const featured = action.payload.filter(
          (product) => product.featured === true
        );
        let maxPrice = action.payload.map((p) => p.price);
        maxPrice = Math.max(...maxPrice);

        state.products_loading = false;
        state.featured_products = featured;
        state.products = action.payload;
        state.filtered_products = action.payload;
        state.filters.max_price = maxPrice;
        state.filters.price = maxPrice;
      })
      .addCase(allProducts.rejected, (state, action) => {
        state.products_loading = false;
        state.products_error = action.error.message;
      });
    builder
      .addCase(singleProduct.pending, (state, action) => {
        state.single_product_loading = true;
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.single_product_loading = false;
        state.single_product = action.payload;
      })
      .addCase(singleProduct.rejected, (state, action) => {
        state.single_product_loading = false;
        state.single_product_error = action.error.message;
      });
  },
});

export const { setGridView, setListView, setUpdateSort, setSortProduct } =
  productSlice.actions;
export default productSlice.reducer;
