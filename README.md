# React Weather Widget

## Description

* A simple responsive weather widget created using React, Typescript and Next.js.
* The widget displays the current weather at the user's location and the weather forecast for the next 5 days.
* It adapts to various screen sizes.

## Setup

1. Clone the repository:
   git clone git@github.com:kuzma-tb/weather-widget.git
   cd weather-widget

2. Install dependencies:
  * npm install

3. Create a `.env.local` file and add your API key:
   * NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key

4. To display this widget in your app, you need to choose one of these sizes:
   * "small" (2x2): Basic display with location input and current weather.
   * "wide" (4x2): Displays additional information like weather forecast.
   * "large" (4x4): Expanded view with full weather details and a forecast.
   * Example:
   * `<WeatherWidget size="wide" />`

5. Run the development server:
   * npm run dev

## Features

- Responsive design with three sizes: small, wide, large.
- User input for location.
- Fetches weather data using the Weather API.
- Reflects the browser theme (light/dark).

## Tech Stack

- React
- Next.js
- Typescript
- Material UI
- Axios (for API requests)
