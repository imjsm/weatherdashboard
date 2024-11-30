

import React, { useState } from "react";

import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TempAndDetails from "./Components/TempAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/topbuttons";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null); // Fixed typo `useSate` -> `useState`

  const getWeather = async () => {
    try {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
        )// Update state with the fetched weather data
     }
     catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeather(); // Fetch weather data whenever `query` or `units` change
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-400 to-blue-700">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast title ='3 hour step forecast' data={weather.hourly} />
          <Forecast title ='3 hour step forecast' data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
