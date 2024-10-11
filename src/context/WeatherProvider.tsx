import { useState, useEffect, useCallback } from "react";
import WeatherContext from "./WeatherContext";
import { getWeatherByLocation } from "../services/weatherService";
import { WeatherDTO } from "../dto/WeatherDTO";

const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [weather, setWeather] = useState<WeatherDTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = useCallback(async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherByLocation(location);
      setWeather(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const setLocation = (location: string) => {
    fetchWeather(location);
  };

  useEffect(() => {
    fetchWeather("Lviv");
  }, [fetchWeather]);

  return (
    <WeatherContext.Provider
      value={{ weather, loading, error, fetchWeather, setLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
