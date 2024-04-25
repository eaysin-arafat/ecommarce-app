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
        if (JSON.stringify(state.user) !== JSON.stringify(action.payload)) {
          state.user = action.payload ?? "";
          state.error = null;
        }
      });
  },
});

export default userSlice.reducer;
