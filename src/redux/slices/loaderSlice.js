import { createSlice } from "@reduxjs/toolkit";
import { LOADER_REDUCER } from "../../../utils";

const loaderSlice = createSlice({
  name: LOADER_REDUCER,
  initialState: false,
  reducers: {
    setLoader(state, action) {
      return action.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
