export function stringToLatLngObject(data) {
  const latLngArr = data.split(",");
  return {
    lat: Number(latLngArr[0]),
    lng: Number(latLngArr[1]),
  };
}

export const parseJwt = (token) => {
  // function to parse JWT token
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const getNameInitials = (name) => {
  return name.split(" ")[0][0] + name.split(" ")[1][0];
};
