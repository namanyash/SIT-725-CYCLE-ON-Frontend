import React from "react";
import { Autocomplete, TextField } from "@mui/material";

export default function PlacesAutocomplete({
  handleSelect,
  options,
  disabled,
}) {
  const handleOptionSelect = (event, val) => {
    handleSelect(val);
  };

  return (
    <Autocomplete
      disableClearable
      onChange={handleOptionSelect}
      options={options}
      disabled={disabled}
      getOptionLabel={(option) => option.locationName}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Destination"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
