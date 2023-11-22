import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("token"));
const cbid = JSON.parse(sessionStorage.getItem("cbid"));

// get cart data from locale storage
export const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const getAllOrders = createAsyncThunk("cart/getAllOrders", async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/660/orders?user.id=${cbid}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const setSubmitOrders = createAsyncThunk(
  "cart/setSubmitOrders",
  async (order) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/660/orders",
        JSON.stringify(order),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
