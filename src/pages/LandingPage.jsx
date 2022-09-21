import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React from "react";
import HomeCycle from "../assets/home_cycle.svg";
import { InsertInvitation, DirectionsBike, Wallet } from "@mui/icons-material";
import theme from "../styles/Theme";
import Cycling from "../assets/cycling_quote.jpg";

function HomePage() {
  return (
    <>
    <Box>
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
              <Typography variant="h2" fontWeight={900}>
                Rent a cycle - Enjoy the difference
              </Typography>
              <Typography variant="h6" fontWeight={400}>
                A web cycle renting platform which will provide the service of
                bicycle renting to the users for commuting
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <img src={HomeCycle} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70vw" },
            mx: "auto",
            my: 0,
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={4}>
            What makes Cycle-on special
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <InsertInvitation fontSize="large" color="primary" />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Book a ride
                </Typography>
                <Typography variant="body1">
                  Locate the nearby Cycle-on stations and book your ride
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Wallet fontSize="large" color="primary" />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Maintain your wallet
                </Typography>
                <Typography variant="body1">
                  Add or withdraw money from your wallet. Easily pay for your
                  rides through the Cycle-on
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <DirectionsBike fontSize="large" color="primary" />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Check previous rides
                </Typography>
                <Typography variant="body1">
                  Check previous rides stats like ride distance, duration and
                  cost.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper
        sx={{
          backgroundColor: theme.palette.secondary.dark,
          p: 5,
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", md: "70vw" },
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            mx: "auto",
            my: 0,
            p: 2,
          }}
          elevation={6}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={4}>
              <img src={Cycling} width={300} height={250} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                fontStyle="italic"
                variant="h5"
                fontWeight="bold"
                gutterBottom
              >
                “Cyclers see considerably more of this beautiful world than any
                other class of citizens. A good bicycle, well applied, will cure
                most ills this flesh is heir to”
              </Typography>
              <Typography variant="h6">- Dr. K. K. Doty</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </Box>
    </>
  );
}

export default HomePage;
