import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { WeatherDTO } from "../../dto/WeatherDTO";

interface WeatherForecastProps {
  forecast: WeatherDTO["forecast"];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => (
  <Grid container spacing={2}>
    {forecast.map((day) => (
      <Grid item xs={4} key={day.date}>
        <Typography variant="h6">{day.date}</Typography>
        <Box display="flex" alignItems="center">
          <img src={day.iconUrl} alt={day.condition} width={36} />
          <Typography variant="body1">
            {day.maxTemperatureCelsius}°C / {day.minTemperatureCelsius}°C
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default WeatherForecast;
