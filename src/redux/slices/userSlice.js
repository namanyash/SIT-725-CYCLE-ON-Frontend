import { createSlice } from "@reduxjs/toolkit";
import { USER_REDUCER } from "../../../utils";

const userSlice = createSlice({
  name: USER_REDUCER,
  initialState: null,
  reducers: {
    //actions
    getUser() {},
    setUser(state, action) {
      const { userData } = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
