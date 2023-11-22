import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userApiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload ?? "";
        state.error = null;
      });
  },
});

export default userSlice.reducer;
