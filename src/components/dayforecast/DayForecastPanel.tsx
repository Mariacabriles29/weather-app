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
        return <Rain width="80px" height="auto" marginTop="2rem" />;
      case "sunny":
        return <Sunny width="80px" height="auto" marginTop="2rem" />;
      case "clouds":
        return <Cloudy width="80px" height="auto" marginTop="2rem" />;
      default:
        return <Sunny width="80px" height="auto" marginTop="2rem" />;
    }
  };

  const days = getDays();
  const weatherSvg = getWeatherSVG();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight="800" fontSize={"1.2rem"}>
        {days}
      </Typography>

      <Typography>{weatherSvg}</Typography>
      <Typography variant="h2" fontWeight="800" fontSize={"1.2rem"}>
        {convertCelsius(currentForecast.main.temp_max)} /{" "}
        {convertCelsius(currentForecast.main.temp_min)}
      </Typography>
    </Box>
  );
};
