import React, { useCallback, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo } from "react";
import { PlacesAutocomplete } from "../components";
import { useEffect } from "react";
import axios from "axios";
import { Close } from "@mui/icons-material";
import { stringToLatLngObject } from "../../utils";

const libraries = ["places"];

function StationInfoComponent({
  open,
  handleClose,
  stationData,
  stations,
  setDirectionsResponse,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [originData, setOriginData] = useState(stationData);
  const [destinationData, setDestinationData] = useState(undefined);
  const n_Bikes = stationData.bikes.length;

  const [directions, setDirections] = useState("");
  console.log(directions);

  const calculateRoute = async () => {
    // Calculating the routes
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route(
      {
        origin: stringToLatLngObject(originData.coordinates),
        destination: stringToLatLngObject(destinationData.coordinates),
        travelMode: google.maps.TravelMode.BICYCLING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsResponse(result);
          setDirections(result.routes[0].legs[0]);
        }
      }
    );
  };

  useEffect(() => {
    if (originData && destinationData) {
      calculateRoute();
    }
  }, [originData, destinationData]);

  const handleSelect = (val) => {
    setDestinationData(val);
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
        <Stack spacing={1}>
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
            {n_Bikes > 0
              ? `Number of Bikes Available: ${n_Bikes}`
              : "Currently No Bikes Available.."}
          </Typography>
          <TextField
            label="Start Location"
            value={originData.locationName}
          ></TextField>
          <PlacesAutocomplete
            options={stations.filter(
              (station) => station._id != originData._id
            )}
            disabled={!Boolean(n_Bikes)}
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
        <Button variant="text" disabled={!Boolean(n_Bikes)}>
          Book a ride
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function HomePage() {
  const theme = useTheme();
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [stations, setStations] = useState(false);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [openStationModal, setOpenStationModal] = useState(false);

  const [directionsResponse, setDirectionsResponse] = useState(null);

  const center = useMemo(
    () => ({
      lat: -37.81364711153148,
      lng: 145.11666757147196,
    }),
    []
  );

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const handleCenterLocation = (loc) => {
  //   setCenterLocation(loc);
  //   map.panTo(loc);
  // };

  useEffect(() => {
    if (isLoaded) {
      const header = {
        headers: {
          "X-Auth-Token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyNjQzMzVlMmEwZTQyYzFjYTRhNWFhIn0sImlhdCI6MTY2Mzc1NDI2NiwiZXhwIjoxNjYzNzU3ODY2fQ.G2UCAxP3x80UHBI6N_61kIkfX5SzXLvTJwrPZcpPvic",
          "content-type": "application/json",
        },
      };
      axios
        .get(`http://localhost:5000/api/locations/getLocation`, header)
        .then((res) => {
          setStations(res.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          }
        });
    }
  }, [isLoaded]);

  const handleStationClick = (event, station) => {
    setOpenStationModal(true);
    setCurrentStation(station);
  };

  const handleStationModalClose = () => {
    setOpenStationModal(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
      }}
    >
      {isLoaded ? (
        <>
          <GoogleMap
            center={center}
            zoom={15}
            options={{
              disableDefaultUI: true,
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
            }}
            onLoad={onLoad}
            onUnmount={onUnmount}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {stations &&
              stations.map((station) => {
                return (
                  <Marker
                    key={station._id}
                    position={stringToLatLngObject(station.coordinates)}
                    icon={{
                      path: "M 18.18 10 l -1.7 -4.68 C 16.19 4.53 15.44 4 14.6 4 H 12 v 2 h 2.6 l 1.46 4 h -4.81 l -0.36 -1 H 12 V 7 H 7 v 2 h 1.75 l 1.82 5 H 9.9 c -0.44 -2.23 -2.31 -3.88 -4.65 -3.99 C 2.45 9.87 0 12.2 0 15 c 0 2.8 2.2 5 5 5 c 2.46 0 4.45 -1.69 4.9 -4 h 4.2 c 0.44 2.23 2.31 3.88 4.65 3.99 c 2.8 0.13 5.25 -2.19 5.25 -5 c 0 -2.8 -2.2 -5 -5 -5 H 18.18 Z M 7.82 16 c -0.4 1.17 -1.49 2 -2.82 2 c -1.68 0 -3 -1.32 -3 -3 s 1.32 -3 3 -3 c 1.33 0 2.42 0.83 2.82 2 H 5 v 2 H 7.82 Z M 14.1 14 h -1.4 l -0.73 -2 H 15 C 14.56 12.58 14.24 13.25 14.1 14 Z M 19 18 c -1.68 0 -3 -1.32 -3 -3 c 0 -0.93 0.41 -1.73 1.05 -2.28 l 0.96 2.64 l 1.88 -0.68 l -0.97 -2.67 c 0.03 0 0.06 -0.01 0.09 -0.01 c 1.68 0 3 1.32 3 3 S 20.68 18 19 18 Z",
                      fillColor: theme.palette.primary.main,
                      fillOpacity: 0.6,
                      scale: 1.5,
                      strokeColor: theme.palette.primary.main,
                    }}
                    onClick={(e) => handleStationClick(e, station)}
                  />
                );
              })}

            {directionsResponse && (
              <DirectionsRenderer
                directions={directionsResponse}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeWeight: 5,
                  },
                }}
              />
            )}
          </GoogleMap>
          {openStationModal && (
            <StationInfoComponent
              open={openStationModal}
              handleClose={handleStationModalClose}
              stationData={currentStation}
              stations={stations}
              setDirectionsResponse={setDirectionsResponse}
            />
          )}
        </>
      ) : (
        <Skeleton variant="rectangular" width="100%" height="100%" />
      )}
    </Box>
  );
}

export default HomePage;
