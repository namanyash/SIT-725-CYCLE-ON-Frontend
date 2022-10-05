import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { USER_REDUCER } from "../../utils";
import { useEffect } from "react";
import { putData } from "../../apiConfig";
import { getUser } from "../redux/slices/userSlice";
import { successAlert } from "../redux/slices/alertSlice";
import Wallet from "../assets/wallet.svg";

export default function WalletPage() {
  const [amount, setAmount] = React.useState(null);
  
  const [currentBalance, setCurrentBalance] = React.useState(null);
  const userData = useSelector((state) => state[USER_REDUCER]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      setCurrentBalance(userData.balance.toFixed(2));
    }
  }, [userData]);
  //check if string is entered
  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  //validation checks
  const handleAmountChange = (event) => {
    if (event.target.value.length <= 0) {
      return;
    }
    if (isNumeric(event.target.value)) {
      setAmount(parseInt(event.target.value));
    } else {
      alert("Please only enter digits!");
      event.target.value = "";
    }
  };
  //updates the balance based on user input
  const handlePurchase = (event) => {
    const request = {
      url: "/users/addBalance",
      payload: {
        valueToAdd: amount,
      },
    };
    putData(
      request,
      (response) => {
        dispatch(getUser());
        dispatch(successAlert({ msg: "Wallet Updated Successfully." }));
      },
      (error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      }
    );
  };
  //menu and field for user interaction
  return (
    <Box p={4}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" fontWeight={900}>
                Top Up Your Wallet
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight={400}>
                Use the form below to add to your wallet, so you're ready to
                ride!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    width: 275,
                    my: 6,
                    p: 3,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Current Balance
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1.5 }}
                      color="text.secondary"
                    >
                      Prices in AUD
                    </Typography>
                    <Typography variant="body10">
                      <b>${currentBalance}</b>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Payment method
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Amount
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  onChange={handleAmountChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" onClick={handlePurchase}>
                  Purchase!
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img width="100%" height="auto" src={Wallet} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
