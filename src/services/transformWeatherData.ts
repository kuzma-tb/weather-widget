import { WeatherDTO } from "../dto/WeatherDTO";

export const transformWeatherApiResponse = (apiResponse: any): WeatherDTO => {
  return {
    location: {
      name: apiResponse.location.name,
      country: apiResponse.location.country,
      region: apiResponse.location.region,
      coordinates: {
        lat: apiResponse.location.lat,
        lon: apiResponse.location.lon,
      },
    },
    current: {
      temperatureCelsius: apiResponse.current.temp_c,
      temperatureFahrenheit: apiResponse.current.temp_f,
      condition: apiResponse.current.condition.text,
      iconUrl: apiResponse.current.condition.icon,
      humidity: apiResponse.current.humidity,
      windSpeedKph: apiResponse.current.wind_kph,
    },
    forecast: apiResponse.forecast.forecastday.map((day: any) => ({
      date: day.date,
      maxTemperatureCelsius: day.day.maxtemp_c,
      minTemperatureCelsius: day.day.mintemp_c,
      condition: day.day.condition.text,
      iconUrl: day.day.condition.icon,
    })),
  };
};
