import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALERT_REDUCER } from "../../utils";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { closeAlert } from "../redux/slices/alertSlice";

const Alerts = () => {
  const alert = useSelector((state) => state[ALERT_REDUCER]);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closeAlert());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alert?.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={alert?.severity}
        sx={{ width: "100%" }}
      >
        <AlertTitle>
          <b>{alert?.title}</b>
        </AlertTitle>
        {alert?.msg}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
