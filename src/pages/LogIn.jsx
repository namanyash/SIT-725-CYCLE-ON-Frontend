import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import theme from "../styles/Theme";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from '@mui/material/Alert';
import InstantMessage from '../components/InstantMessage';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};





function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {"Cycle-on Technologies Inc. "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LogIn({handleClose}) {

  const [values, setValues] = useState({
    username: "", 
    pass: "",
    showPass: false,
  });

  
  const [showAlert, setShowAlert] = useState(false); //Controls Alert
  const [message, setMessage] = useState('') //Controls Message
  const [alertType, setAlertType] = useState(false) //Controls Message


console.log(showAlert)
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/users/loginUP`, {
			username: values.username,
			password: values.pass,
		})
    .then((res) => {
			localStorage.setItem("token", res.data.token);
      setMessage("Welcome Back!");
      setAlertType(true);
      setShowAlert(true);
      handleClose();
		})
		.catch((error) => {
        if (error.response){
          console.log(error.response.data);
          setMessage(error.response.data.errors[0].msg);
          setAlertType(false);
          setShowAlert(true);
        }
    });
    setShowAlert(false);
  };

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Log in
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    {showAlert ?  <InstantMessage type={alertType} message = {message} /> : `` }
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      autoComplete="username"
                      autoFocus
                      onChange={(e) => setValues({ ...values, username: e.target.value })}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => setValues({ ...values, pass: e.target.value })}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </Box>
        </Fade>
      </Modal>
  );
}
