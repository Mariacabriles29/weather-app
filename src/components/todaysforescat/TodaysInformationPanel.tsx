import React from "react";
import { WeatherData } from "../weather/weatherInfo";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rain from "../dayInformation/Rain";
import Sunny from "../dayInformation/Sunny";
import Cloudy from "../dayInformation/Cloudy";
import { ForecastData } from "./forecastInfo";

interface TodaysInformationPanelProps {
  currentForecast: ForecastData | null;
}
export const TodaysInformationPanel = (props: TodaysInformationPanelProps) => {
  //const { currentForecast } = props;
  const convertCelsius = () => {
    try {
      // const gradesFahrenheit = currentForecast.main.temp;
      //  let celsius = gradesFahrenheit - 273.15;
      // const result = celsius.toFixed(0);
      return 0;
    } catch (error) {
      return `0°`;
    }
  };
  const getHours = (): string => {
    const hours = [
      "6:00 AM",
      "9:00 AM",
      "12:00 PM",
      "3:00 PM",
      "6:00 PM",
      "9:00 PM",
    ];
    const currentDayIndex = new Date().getDay();
    return hours[currentDayIndex];
  };
  const getWeatherSVG = (): JSX.Element => {
    //const weatherType = currentForecast.weather[0].main.toLowerCase();

    // switch (weatherType) {
    //   case "rain":
    //     return <Rain width="200px" height="auto" />;
    //   case "sunny":
    //     return <Sunny width="200px" height="auto" />;
    //   case "clouds":
    //     return <Cloudy width="200px" height="auto" />;
    //   default:
    //     return <Sunny width="200px" height="auto" />;
    // }
    return <></>;
  };

  const hours = getHours();
  const weatherSVG = getWeatherSVG();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontWeight="800" mt="2rem">
          {hours}
        </Typography>

        <Typography variant="h2" fontWeight="800" mt="2rem">
          {weatherSVG}
        </Typography>
        <Typography variant="h2" fontWeight={"800"} mt={"2rem"}>
          {convertCelsius()}°
        </Typography>
      </Box>
    </>
  );
};
