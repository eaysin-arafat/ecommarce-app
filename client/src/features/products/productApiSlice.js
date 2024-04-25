import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all products
export const allProducts = createAsyncThunk("product/allProducts", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/444/products`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get single product
export const singleProduct = createAsyncThunk(
  "product/singleProduct",
  async (id) => {
    try {
      const response = await axios.get(
        // `${import.meta.env.VITE_BASE_SINGLE_PRODUCT_URL}?id=${id}`
        `${import.meta.env.VITE_BASE_URL}/444/single_products?id=${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
