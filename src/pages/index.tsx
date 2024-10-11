import React from "react";
import { WeatherWidget } from "../components/Weather";

const Home: React.FC = () => {
  const size = "wide";

  return (
    <div>
      <WeatherWidget size={size} />
    </div>
  );
};

export default Home;
