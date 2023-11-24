import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = JSON.parse(sessionStorage.getItem("token"));
const cbid = JSON.parse(sessionStorage.getItem("cbid"));

export const getUser = createAsyncThunk("user/getUser", async () => {
  if (token) {
    try {
      const response = axios.get(`http://localhost:8000/600/users/${cbid}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return (await response).data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  } else {
    return null;
  }
});
