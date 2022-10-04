import React, { useCallback, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Box, Button, Skeleton, useTheme } from "@mui/material";
import { useMemo } from "react";
import { BookRideComponent, CustomDialog } from "../components";
import { useEffect } from "react";
import { stringToLatLngObject, USER_REDUCER } from "../../utils";
import { getData, putData } from "../../apiConfig";
import { useSelector } from "react-redux";

const libraries = ["places"];
const END_RIDE = "End Ride";

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
  const [isBooked, setIsBooked] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const userData = useSelector((state) => state[USER_REDUCER]);

  const center = useMemo(
    () => ({
      lat: -37.81364711153148,
      lng: 145.11666757147196,
    }),
    []
  );

  const calculateRoute = async (start, end, setDirections) => {
    // Calculating the routes
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route(
      {
        origin: stringToLatLngObject(start),
        destination: stringToLatLngObject(end),
        travelMode: google.maps.TravelMode.BICYCLING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirectionsResponse(result);
          setDirections && setDirections(result.routes[0].legs[0]);
        }
      }
    );
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleEndRideButton = (e) => {
    e.preventDefault();
    setOpenDialog(!openDialog);
  };

  const handleDialogClose = (e) => {
    if (e.currentTarget.textContent == END_RIDE) {
      const request = {
        url: "/rides/endRide",
      };
      putData(
        request,
        (response) => {
          setIsBooked(false);
          setDirectionsResponse(null);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    setOpenDialog(!openDialog);
  };

  useEffect(() => {
    if (isLoaded) {
      const request = {
        url: "/locations/getLocation",
      };
      getData(
        request,
        (response) => {
          setStations(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [isLoaded]);

  const handleStationClick = (event, station) => {
    setOpenStationModal(true);
    setCurrentStation(station);
  };

  const handleStationModalClose = (val) => {
    if (val == "done") {
      setIsBooked(true);
    }
    setOpenStationModal(false);
  };

  useEffect(() => {
    if (isLoaded) {
      if (userData) {
        // Set active ride
        if (userData.activeRide) {
          const { startLocationCoordinates, endLocationCoordinates } =
            userData.activeRide;
          calculateRoute(startLocationCoordinates, endLocationCoordinates);
          setIsBooked(true);
        }
      }
    }
  }, [userData, isLoaded]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "83vh",
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
                    }}
                    onClick={(e) => handleStationClick(e, station)}
                  />
                );
              })}

            {directionsResponse && isBooked && (
              <DirectionsRenderer
                directions={directionsResponse}
                options={{
                  polylineOptions: {
                    zIndex: 50,
                    strokeWeight: 7,
                    strokeColor: theme.palette.info.light,
                  },
                }}
              />
            )}
          </GoogleMap>
          {openStationModal && (
            <BookRideComponent
              open={openStationModal}
              handleClose={handleStationModalClose}
              stationData={currentStation}
              stations={stations}
              calculateRoute={calculateRoute}
            />
          )}
          {isBooked && (
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{
                position: "absolute",
                right: "10px",
                top: "10px",
              }}
              onClick={handleEndRideButton}
            >
              {END_RIDE}
            </Button>
          )}
        </>
      ) : (
        <Skeleton variant="rectangular" width="100%" height="100%" />
      )}
      {openDialog && (
        <CustomDialog
          dialogTitle="End current ride?"
          dialogText="Are you sure you want to end current ride?"
          dialogAction={
            <Button
              color="error"
              onClick={handleDialogClose}
              variant="contained"
            >
              {END_RIDE}
            </Button>
          }
          handleClose={handleDialogClose}
        />
      )}
    </Box>
  );
}

export default HomePage;
