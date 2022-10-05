import { createSlice } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "../../../utils";

const authSlice = createSlice({
  name: AUTH_REDUCER,
  initialState: null,
  reducers: {
    isLoggedIn: (state, action) => {
      return action.payload;
    },
  },
});

export const { isLoggedIn } = authSlice.actions;
export default authSlice.reducer;
