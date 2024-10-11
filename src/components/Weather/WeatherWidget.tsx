import React from "react";
import useWeather from "../../hooks/useWeather";
import { CircularProgress, Box, Typography, useTheme } from "@mui/material";
import WeatherCard from "./WeatherCard";
import WeatherLocationInput from "./WeatherLocationInput";
import WeatherForecast from "./WeatherForecast";

interface WeatherWidgetProps {
  size: "small" | "wide" | "large";
  columnSpan?: number;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  size,
  columnSpan = 2,
}) => {
  const { weather, loading, error } = useWeather();
  const theme = useTheme();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const getGridLayout = () => {
    switch (size) {
      case "small":
        return { columns: 2, rows: 2 };
      case "wide":
        return { columns: 4, rows: 2 };
      case "large":
        return { columns: 4, rows: 4 };
      default:
        return { columns: 2, rows: 2 };
    }
  };

  const { columns, rows } = getGridLayout();

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${columns}, 1fr)`}
      gridTemplateRows={`repeat(${rows}, 1fr)`}
      gap={2}
      height="100%"
      gridColumn={`span ${columnSpan}`}
    >
      <Box gridArea={`1 / 1 / span 1 / span ${columns}`} width="100%">
        <WeatherLocationInput />
      </Box>

      <Box
        gridArea={`2 / 1 / span 1 / span ${columns}`}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <WeatherCard weather={weather} size={size} />
      </Box>

      {(size === "wide" || size === "large") && weather?.forecast && (
        <Box
          gridArea={
            size === "wide"
              ? `3 / 1 / span 1 / span ${columns}`
              : `3 / 1 / span 2 / span ${columns}`
          }
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <WeatherForecast forecast={weather.forecast} />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(WeatherWidget);
