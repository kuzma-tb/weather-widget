import { fetchWeatherData } from "../api/weatherApiClient";
import { fetchLocationData } from "../api/locationApiClient";
import { transformWeatherApiResponse } from "./transformWeatherData";
import { WeatherDTO } from "../dto/WeatherDTO";

export const getWeatherByLocation = async (
  location: string,
): Promise<WeatherDTO> => {
  const locationData = await fetchLocationData(location);
  if (!locationData.length) {
    throw new Error("Invalid location. Please try again.");
  }

  const apiResponse = await fetchWeatherData(location);
  return transformWeatherApiResponse(apiResponse);
};
