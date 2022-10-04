import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { putData } from "../../apiConfig";
import PlacesAutocomplete from "./PlacesAutocomplete";

function BookRideComponent({
  open,
  handleClose,
  stationData,
  stations,
  calculateRoute,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [originData, setOriginData] = useState(stationData);
  const [destinationData, setDestinationData] = useState(undefined);
  const nBikes = stationData.bikes.length;

  const [directions, setDirections] = useState("");

  useEffect(() => {
    if (originData && destinationData) {
      calculateRoute(
        originData.coordinates,
        destinationData.coordinates,
        setDirections
      );
    }
  }, [originData, destinationData]);

  const handleSelect = (val) => {
    setDestinationData(val);
  };

  const handleBookRide = () => {
    const request = {
      url: "/rides/bookRide",
      payload: {
        startLocationName: originData.locationName,
        endLocationName: destinationData.locationName,
        bikeId: originData.bikes[0]._id,
      },
    };
    putData(
      request,
      (response) => {
        handleClose("done");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogContent>
        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Start Your Journey
              </Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {nBikes > 0
              ? `Number of Bikes Available: ${nBikes}`
              : "Currently no bikes are available.."}
          </Typography>
          <TextField
            label="Start Location"
            value={originData.locationName}
          ></TextField>
          <PlacesAutocomplete
            options={stations.filter(
              (station) => station._id != originData._id
            )}
            disabled={!Boolean(nBikes)}
            handleSelect={handleSelect}
          />
          {directions && (
            <Box>
              <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                  <Typography>Distance: {directions.distance.text}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Duration: {directions.duration.text}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          disabled={!Boolean(nBikes)}
          onClick={handleBookRide}
        >
          Book a ride
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BookRideComponent;
