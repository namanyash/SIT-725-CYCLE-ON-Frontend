import React from "react";
import {
  Toolbar,
  Typography,
  Box,
  Stack,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import theme from "../styles/Theme";
import PrivacyPolicy from "../assets/Privacy_Policy.pdf";
import TermsAndConditions from "../assets/Terms_and_conditions.pdf";
import FAQ from "../assets/FAQ.pdf";

function Footer() {
  return (
    <Toolbar
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md="auto">
          <Typography textAlign="center">
            &copy; 2022 Cycle-on Technologies Inc.
          </Typography>
        </Grid>
        <Grid item xs={12} md="auto">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={3} direction="row">
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() =>
                  window.open("https://www.instagram.com/accounts/login/")
                }
              >
                <Instagram />
              </IconButton>

              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => window.open("https://www.facebook.com/")}
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => window.open("https://twitter.com/?lang=en")}
              >
                <Twitter />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item container xs={12} md="auto" justifyContent="center">
          <Stack spacing={3} direction="row">
            <Link href={PrivacyPolicy} target="_blank">
              Privacy Policy
            </Link>
            <Link href={FAQ} target="_blank">
              FAQs
            </Link>
            <Link href={TermsAndConditions} target="_blank">
              Terms and Conditions
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Footer;
