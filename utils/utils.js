export function stringToLatLngObject(data) {
  const latLngArr = data.split(",");
  return {
    lat: Number(latLngArr[0]),
    lng: Number(latLngArr[1]),
  };
}
