import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import theme from "../styles/Theme";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle} component="form" autoComplete="off">
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
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </FormControl>

            <FormControl sx={formcontrolStyle}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                id="outlined-basic"
                label="Phone number"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                id="outlined-basic"
                label="Set Password"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={formcontrolStyle}>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
            </FormControl>
            <Button variant="contained">Sign up</Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
