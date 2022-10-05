import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_REDUCER } from "../../utils";
import { setLoader } from "../redux/slices/loaderSlice";

export default function Loader() {
  const loader = useSelector((state) => state[LOADER_REDUCER]);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setLoader(false));
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loader}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
