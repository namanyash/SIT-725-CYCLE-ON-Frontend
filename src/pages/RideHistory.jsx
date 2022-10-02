import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import Cards from "../components/Cards";

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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);



export default function RideHistory() {
  //Ride history cards are displayed here
  return (
    <div className="wrapper">
      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginBottom: 6,
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Ride History
      </Typography>

      <div style={{ display: "flex", flexWrap: "wrap" }}>

      <Cards
        starttime="The Everyday Salad"
        startlocation="Test"
        bikename="Test"
        endtime="Test"
        endlocation="Test"
      />
      <Cards
        starttime="The Everyday Salad"
        startlocation="Test"
        bikename="Test"
        endtime="Test"
        endlocation="Test"
      />
      </div>
    </div>
  );
}
