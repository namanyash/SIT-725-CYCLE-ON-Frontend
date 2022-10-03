import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "../styles/Theme";
import Grid from "@mui/material/Unstable_Grid2";

const cardStyle = {
  minWidth: "90%",
  maxWidth: "95%",
  bgcolor: theme.palette.secondary.light,
};

//Dummy Values
const bikeDes = {
  startTime: "6.40 pm",
  bikeId: 958083945890,
  description: "green bike Hero Racer",
  startLocation: "home alone",
  bikeName: "some name",
};

export default function CurrentRide() {
  const handleEndRide = () => {
    console.log("end ride");
  };
  return (
    <Card sx={cardStyle} raised={true}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">
              Start Time : {bikeDes.startTime}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              Start Location: {bikeDes.startLocation}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Bike Id: {bikeDes.bikeId}</Typography>
            <Typography variant="body2">
              Bike Name: {bikeDes.bikeName}
            </Typography>
            <Typography variant="body2">
              Description: {bikeDes.description}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CardActions>
              <Button onClick={handleEndRide} variant="contained" size="small">
                End Ride
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
