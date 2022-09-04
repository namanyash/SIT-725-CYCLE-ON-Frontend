import React from "react";
import { Toolbar, Typography, Box, Stack, Grid, Link } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import theme from "../styles/Theme";

function Footer() {
  return (
    <Toolbar
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid container alignContent="center">
        <Grid item xs={12} md={4}>
          <Typography>&copy; 2022 Cycle-on Technologies Inc.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={3} direction="row">
              <Instagram />
              <Facebook />
              <Twitter />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Stack spacing={3} direction="row">
              <Link href="#" color={theme.palette.primary.contrastText}>
                Privacy Policy
              </Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Terms and Conditions</Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Footer;
