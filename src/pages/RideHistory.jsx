import { Box, Grid, Typography, Paper, Stack } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_REDUCER } from "../../utils";
import Cards from "../components/Cards";

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
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" fontWeight={900} gutterBottom>
            Ride History
          </Typography>
        </Grid>

        {rideHistory && rideHistory.length > 0 ? (
          rideHistory
            .slice(0)
            .reverse()
            .map((item, index) => (
              <Grid item key={index} xs={12} md={6}>
                <Cards
                  startTime={item.startTime}
                  startLocation={item.startLocation}
                  bikeName={item.bikeName}
                  endTime={item.endTime}
                  endLocation={item.endLocation}
                  fare={item.fare}
                />
              </Grid>
            ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h5" textAlign="center">
              No ride history available.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
