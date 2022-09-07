import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React from "react";
import HomeCycle from "../assets/home_cycle.svg";
import { InsertInvitation, DirectionsBike, Wallet } from "@mui/icons-material";
import theme from "../styles/Theme";
import Cycling from "../assets/cycling_quote.jpg";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = {
    spacing: 8,
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box m={5} pt={4}>
      <React.Fragment>
        <Paper
          sx={{
            my: 1,
          }}
          elevation={0}
          square
        >
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
        </Paper>
      </React.Fragment>

      <Grid container align="center">
        <Box pb={3} pt={3}>
          <Card sx={{ minWidth: 275 }}>
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
              <Typography variant="body10">$</Typography>
            </CardContent>
          </Card>
        </Box>
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
