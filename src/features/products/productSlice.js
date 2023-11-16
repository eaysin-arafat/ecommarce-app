import { createSlice } from "@reduxjs/toolkit";
import { allProducts, getLocalStorage, singleProduct } from "./productApiSlice";

const initialState = {
  isSidebarOpen: true,
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
  sort: "name-a",
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

  // cart state
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 643,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state, action) => {
      state.isSidebarOpen = false;
    },
    setGridView: (state, action) => {
      state.grid_view = true;
    },
    setListView: (state, action) => {
      state.grid_view = false;
    },
    setUpdateSort: (state, action) => {
      state.sort = action.payload;
    },
    setSortProduct: (state, action) => {
      const { sort, filtered_products } = state;

      let tempProducts = [...filtered_products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
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

      return { ...state, filtered_products: tempProducts };
    },
    setUpdateFilter: (state, action) => {
      const { name, value } = action.payload;
      const { filters } = state;
      return { ...state, filters: { ...filters, [name]: value } };
    },
    setFilterProduct: (state, action) => {
      const { products } = state;
      const { text, category, company, color, price, shipping } = state.filters;
      let tempProducts = [...products];

      // filtering
      // text
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }
      // category
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      // company
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      // colors
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      // price
      tempProducts = tempProducts.filter((product) => product.price <= price);
      // shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        );
      }

      return { ...state, filtered_products: tempProducts };
    },
    clearFilter: (state, action) => {
      const { filters } = state;
      return {
        ...state,
        filters: {
          ...filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };
    },
    // cart state management
    setAddToCart: (state, action) => {
      const { id, color, amount, product } = action.payload;

      const tempItem = state.cart.find((i) => i.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    },
    setRemoveCartItem: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(tempCart));
      return { ...state, cart: tempCart };
    },
    setClearCartItem: (state, action) => {
      return { ...state, cart: [] };
    },
    setToggleCartAmount: (state, action) => {
      const { id, value } = action.payload;

      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === "inc") {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }

          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });

      return { ...state, cart: tempCart };
    },
    setCartTotals: (state, action) => {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;

          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
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

export const {
  setSidebarOpen,
  setSidebarClose,
  setGridView,
  setListView,
  setUpdateSort,
  setSortProduct,
  setUpdateFilter,
  setFilterProduct,
  clearFilter,
  setAddToCart,
  setRemoveCartItem,
  setToggleCartAmount,
  setClearCartItem,
  setCartTotals,
} = productSlice.actions;
export default productSlice.reducer;
