import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import useWeather from "../../hooks/useWeather";

const WeatherLocationInput: React.FC = () => {
  const { setLocation } = useWeather();
  const [inputLocation, setInputLocation] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocation(e.target.value);
  };

  const handleLocationSubmit = () => {
    if (inputLocation.trim()) {
      setLocation(inputLocation.trim());
      setInputLocation("");
    }
  };

  return (
    <Box display="flex" gap={2} alignItems="center" width="100%" mb={2}>
      <TextField
        label="Enter Location"
        variant="outlined"
        size="small"
        value={inputLocation}
        onChange={handleLocationChange}
        placeholder="e.g., Lviv"
        fullWidth
      />
      <Button variant="contained" onClick={handleLocationSubmit}>
        Search
      </Button>
    </Box>
  );
};

export default WeatherLocationInput;
