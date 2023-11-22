import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../features/products/productSlice";
import cartReducer from "../../features/cart/cartSlice";
import authReducer from "../../features/auth/authSlice";
import userReducer from "../../features/user/userSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
