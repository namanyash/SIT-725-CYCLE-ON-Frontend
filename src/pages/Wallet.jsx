import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//wallet function, sets values to nothing 
export default function WalletPage() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // front end form
  return (
    <Box m={5} pt={4} align="center">
          <Grid container alignItems="center">
            <Grid item xs={12} md={5}>
              <Box mx={2}>
                <Typography variant="h3" fontWeight={900}>
                  Top Up Your Wallet
                </Typography>
                <Typography variant="h6" fontWeight={400}>
                  Use the form below to add to your wallet, so you're ready to
                  ride!
                </Typography>
              </Box>
            </Grid>
          </Grid>


      <Grid container>
      
          <Card sx={{ minWidth: 275,
                          marginTop: 8,
                              display: "flex",
                              flexDirection: "column",
                              align: "center",
                          }}>
            <CardContent>
              <Typography variant="h6">
                Current Balance
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Prices in AUD
              </Typography>
              <Typography variant="body10">$</Typography>
            </CardContent>
          </Card>
        
      </Grid>

      <Grid container alignItems="center">
        <Grid item xs={12} md={5}>
          <Box pb={5} pt={5}>
            <Paper
              sx={{
                my: 1,
              }}
              elevation={0}
              square
            >
              <React.Fragment>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Amount
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange("amount")}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
              </React.Fragment>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Grid container alignItems="center">
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              my: 1,
            }}
            elevation={0}
            square
          >
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Payment method
              </Typography>
              <Grid container spacing={3}>
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
                  <FormControlLabel
                    control={
                      <Checkbox color="secondary" name="saveCard" value="yes" />
                    }
                    label="Remember credit card details for next time"
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>

      <Grid container alignItems="center">
        <Grid item xs={12} md={5}>
          <Box pb={10} pt={10}>
            <Button variant="contained">Purchase!</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
