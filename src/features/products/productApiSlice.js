import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all products
export const allProducts = createAsyncThunk("product/allProducts", async () => {
  try {
    const response = await axios.get("http://localhost:8000/444/products");
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
