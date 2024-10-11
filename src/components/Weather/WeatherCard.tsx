import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { WeatherDTO } from "../../dto/WeatherDTO";

interface WeatherCardProps {
  weather: WeatherDTO | null;
  size: "small" | "wide" | "large";
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, size }) => {
  const theme = useTheme();

  if (!weather) {
    return (
      <Card>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <CircularProgress />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {weather.location.name}, {weather.location.country}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <img
            src={weather.current.iconUrl}
            alt={weather.current.condition}
            width={size === "small" ? 40 : 60}
            height={size === "small" ? 40 : 60}
          />
          <Typography variant={size === "small" ? "h5" : "h4"} ml={1}>
            {weather.current.temperatureCelsius}°C
          </Typography>
        </Box>
        {size !== "small" && (
          <Typography variant="body2">{weather.current.condition}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
