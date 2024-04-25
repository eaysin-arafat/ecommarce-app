import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUser } from "../user/userApiSlice";

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (user_data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        user_data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  "auth/logInUser",
  async (user_data, { dispatch }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        user_data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch(getUser());

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
