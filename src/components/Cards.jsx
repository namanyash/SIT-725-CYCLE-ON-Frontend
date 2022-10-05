import React, { useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
//component for the ridehistory page, to display information to the user
const Cards = (props) => {
  const { startTime, endTime } = props;
  const startTimeString = new Date(startTime);
  const endTimeString = new Date(endTime);
  return ( 
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <Typography textAlign="left" fontWeight={500} fontSize={24}>
                Bike: {props.bikeName}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography textAlign="right" fontWeight={500} fontSize={36}>
                ${props.fare}
              </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={1}></Grid>
              <Grid item xs={4}>
                <Typography textAlign="left" fontWeight={500} fontSize={24}>
                  {props.startLocation}
                </Typography>
                <Typography textAlign="left" fontWeight={100}>
                  {startTimeString.toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography textAlign="center" fontWeight={500} fontSize={50}>
                  <ArrowForwardTwoToneIcon fontSize="xlarge" />
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography textAlign="right" fontWeight={500} fontSize={24}>
                  {props.endLocation}
                </Typography>
                <Typography textAlign="right" fontWeight={100}>
                  {endTimeString.toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
