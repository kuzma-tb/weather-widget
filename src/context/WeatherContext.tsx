import { createContext } from "react";
import { WeatherDTO } from "../dto/WeatherDTO";

interface WeatherContextType {
  weather: WeatherDTO | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (location: string) => void;
  setLocation: (location: string) => void;
}

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: false,
  error: null,
  fetchWeather: () => {},
  setLocation: () => {},
});

export default WeatherContext;
