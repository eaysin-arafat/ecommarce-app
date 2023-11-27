import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, getLocalStorage, setSubmitOrders } from "./cartApiSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 643,
    orders_loading: false,
    orders_error: false,
    orders: [],
    order_state: true,
  },

  reducers: {
    setAddToCart: (state, action) => {
      const { id, mainColor: color, amount, product } = action.payload;
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
      .addCase(getAllOrders.pending, (state, action) => {
        state.orders_loading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.orders_loading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, aciton) => {
        state.orders_loading = false;
        state.orders_error = aciton.error.message;
      })
      .addCase(setSubmitOrders.fulfilled, (state, action) => {
        state.order_state = true;
        state.orders.push(action.payload);
      })
      .addCase(setSubmitOrders.rejected, (state, action) => {
        state.order_state = false;
      });
  },
});

export const {
  setAddToCart,
  setRemoveCartItem,
  setClearCartItem,
  setToggleCartAmount,
  setCartTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
