import React, { useCallback, useState } from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { Box, Skeleton } from "@mui/material";

const center = {
  lat: -3.745,
  lng: -38.523,
};

function HomePage() {
  const [map, setMap] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAUfatZZ8HtPPT6UyefV3kG0dq8L1KfjuI",
  });

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(isLoaded);

  if (!isLoaded) {
    return <Skeleton variant="rectangular" width="100%" height="100%" />;
  }
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </Box>
  );
}

export default HomePage;
