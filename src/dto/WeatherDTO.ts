export interface WeatherDTO {
  location: {
    name: string;
    country: string;
    region: string;
    coordinates: {
      lat: number;
      lon: number;
    };
  };
  current: {
    temperatureCelsius: number;
    temperatureFahrenheit: number;
    condition: string;
    iconUrl: string;
    humidity: number;
    windSpeedKph: number;
  };
  forecast: Array<{
    date: string;
    maxTemperatureCelsius: number;
    minTemperatureCelsius: number;
    condition: string;
    iconUrl: string;
  }>;
}
