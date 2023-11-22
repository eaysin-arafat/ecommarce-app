import { createSlice } from "@reduxjs/toolkit";
import { createUser, logInUser } from "./authApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    error: null,
    status: false,
  },
  reducers: {
    userLogOut: (state, action) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("cbid");
      state.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
        state.status = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.user.accessToken = action.payload.accessToken;
        state.status = true;

        sessionStorage.setItem(
          "token",
          JSON.stringify(action.payload.accessToken)
        );
        sessionStorage.setItem("cbid", JSON.stringify(action.payload.user.id));
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
        state.status = false;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.user.accessToken = action.payload.accessToken;
        state.status = true;

        sessionStorage.setItem(
          "token",
          JSON.stringify(action.payload.accessToken)
        );
        sessionStorage.setItem("cbid", JSON.stringify(action.payload.user.id));
      });
  },
});

export default authSlice.reducer;
export const { userLogOut } = authSlice.actions;
