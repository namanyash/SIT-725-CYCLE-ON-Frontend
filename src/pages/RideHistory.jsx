import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_REDUCER } from "../../utils";
import Cards from "../components/Cards";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function RideHistory() {
  const userData = useSelector((state) => state[USER_REDUCER]);
  const [rideHistory, setRideHistory] = useState(null);

  useEffect(() => {
    if (userData) {
      setRideHistory(userData.rideHistory);
    }
  }, [userData]);

  //Ride history cards are displayed here
  return (
    rideHistory && (
      <div className="wrapper">
        <Typography
          fontSize={50}
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

        <Grid container>
          {rideHistory.reverse().map((item, index) => (
            <Grid item key={index} xs={6}>
              <Cards
                startTime={item.startTime}
                startLocation={item.startLocation}
                bikeName={item.bikeName}
                endTime={item.endTime}
                endLocation={item.endLocation}
                fare={item.fare}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
}
