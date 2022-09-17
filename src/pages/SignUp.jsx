import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import theme from "../styles/Theme";
import TextField from "@mui/material/TextField";
import { FormControl, FormHelperText } from "@mui/material";
import { Container } from "@mui/system";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: theme.palette.secondary.light,
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const formcontrolStyle = {
  margin: "10px 2px",
};

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [setPassword, setPass] = React.useState("");
  const [confirmPassword, setConfirmPass] = React.useState("");
  const [isValid, setValid] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: setPassword,
      phoneNumber: phoneNumber,
      userName: userName,
    };
    console.log("onsubmit", obj);
  }

  const validate = () => {
    return (
      firstName.length &&
      lastName.length &&
      phoneNumber.length &&
      userName.length &&
      email.length &&
      setPassword &&
      confirmPassword
    );
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [
    firstName,
    lastName,
    phoneNumber,
    setPassword,
    confirmPassword,
    email,
    userName,
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phoneNumber") {
      setPhoneNumber(value);
    }
    if (id === "password") {
      setPass(value);
    }
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "setPassword") {
      setPass(value);
    }
    if (id === "confirmPassword") {
      setConfirmPass(value);
      if (value !== setPassword) {
        setErrorConfirmPassword(true);
      } else {
        setErrorConfirmPassword(false);
      }
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={boxStyle}
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Typography
            align="center"
            color={theme.palette.secondary.contrastText}
            variant="h5"
            fontWeight="bold"
            gutterBottom
          >
            Sign up
          </Typography>
          <Container sx={containerStyle} maxWidth="lg">
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                type="text"
                id="firstName"
                value={firstName}
                label="First Name"
                variant="outlined"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                label="Last Name"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                label="Phone number"
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
                maxLength={9}
                inputProps={{
                  maxLength: 9,
                  minLength: 9,
                  pattern: "[0-9]{9}",
                }}
              />
              <FormHelperText>Enter your 9 digit mobile number</FormHelperText>
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                value={userName}
                id="userName"
                label="Username"
                variant="outlined"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                type="email"
                id="email"
                value={email}
                label="Email"
                onChange={(e) => handleInputChange(e)}
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                type="password"
                id="setPassword"
                value={setPassword}
                onChange={(e) => handleInputChange(e)}
                label="Set Password"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                required
                error={errorConfirmPassword}
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                label="Confirm Password"
                variant="outlined"
              />
              {errorConfirmPassword && (
                <FormHelperText error={errorConfirmPassword}>
                  Passwords don't match
                </FormHelperText>
              )}
            </FormControl>
            <Button disabled={!isValid} variant="contained" type="submit">
              Sign up
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
