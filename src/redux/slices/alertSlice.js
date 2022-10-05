import { createSlice } from "@reduxjs/toolkit";
import { ALERT_REDUCER } from "../../../utils";

const alertSlice = createSlice({
  name: ALERT_REDUCER,
  initialState: {
    open: false,
    severity: "error",
    title: "Error",
    msg: "",
  },
  reducers: {
    errorAlert(state, action) {
      const { msg } = action.payload;
      return { ...state, open: true, severity: "error", msg, title: "Error" };
    },
    successAlert(state, action) {
      const { msg } = action.payload;
      return {
        ...state,
        open: true,
        severity: "success",
        msg,
        title: "Success",
      };
    },
    closeAlert(state, action) {
      return { ...state, open: false };
    },
  },
});

export const { errorAlert, successAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
