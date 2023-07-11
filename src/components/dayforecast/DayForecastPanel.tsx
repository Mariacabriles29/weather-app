import moment from "moment";
import { ForecastData } from "../todaysforescat/forecastInfo";
import Rain from "../dayInformation/Rain";
import Sunny from "../dayInformation/Sunny";
import Cloudy from "../dayInformation/Cloudy";
import { Box, Typography } from "@mui/material";

interface DayForecastPanelProps {
  currentForecast: ForecastData;
}

export const DayForecastPanel = (props: DayForecastPanelProps) => {
  const { currentForecast } = props;

  const convertCelsius = (temp: number) => {
    try {
      const gradesFahrenheit = temp;
      let celsius = gradesFahrenheit - 273.15;
      const result = celsius.toFixed(0);
      return result;
    } catch (error) {
      return `0°`;
    }
  };

  const getDays = (): string => {
    return moment(currentForecast.dt_txt).format("ddd");
  };
  const getWeatherSVG = (): JSX.Element => {
    const weatherType = currentForecast.weather[0].main.toLowerCase();

    switch (weatherType) {
      case "rain":
        return <Rain width="auto" height="45px" marginTop="2rem" />;
      case "sunny":
        return <Sunny width="auto" height="45px" marginTop="2rem" />;
      case "clouds":
        return <Cloudy width="auto" height="45px" marginTop="2rem" />;
      default:
        return <Sunny width="auto" height="45px" marginTop="2rem" />;
    }
  };
  const getWeatherName = (): string => {
    const weatherType = currentForecast.weather[0].main.toLowerCase();

    switch (weatherType) {
      case "rain":
        return "Lluvia";
      case "sunny":
        return "Soleado";
      case "clouds":
        return "Nublado";
      default:
        return "Soleado";
    }
  };

  const weatherName = getWeatherName();

  const days = getDays();
  const weatherSvg = getWeatherSVG();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 6px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
      }}
    >
      <Typography variant="h2" fontWeight="800" fontSize={"1rem"}>
        {days}
      </Typography>
      <Typography>{weatherSvg}</Typography>
      <Typography variant="h2" fontWeight="800" fontSize={"1rem"}>
        {weatherName}
      </Typography>
      <Typography variant="h2" fontWeight="800" fontSize={"1rem"}>
        {convertCelsius(currentForecast.main.temp_max)} /
        {convertCelsius(currentForecast.main.temp_min)}
      </Typography>
    </Box>
  );
};
