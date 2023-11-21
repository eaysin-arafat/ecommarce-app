import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all products
export const allProducts = createAsyncThunk("product/allProducts", async () => {
  try {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get single product
export const singleProduct = createAsyncThunk(
  "product/singleProduct",
  async (url) => {
    try {
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get cart data from locale storage
export const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
