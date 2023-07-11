import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rain from "../dayInformation/Rain";
import Sunny from "../dayInformation/Sunny";
import Cloudy from "../dayInformation/Cloudy";
import { ForecastData } from "./forecastInfo";
import moment from "moment";

interface TodaysInformationPanelProps {
  currentForecast: ForecastData;
}
export const TodaysInformationPanel = (props: TodaysInformationPanelProps) => {
  const { currentForecast } = props;
  const convertCelsius = () => {
    try {
      const gradesFahrenheit = currentForecast.main.temp;
      let celsius = gradesFahrenheit - 273.15;
      const result = celsius.toFixed(0);
      return result;
    } catch (error) {
      return `0°`;
    }
  };
  const getHours = (): string => {
    return moment(currentForecast.dt_txt).format("LT");
  };
  const getWeatherSVG = (): JSX.Element => {
    const weatherType = currentForecast.weather[0].main.toLowerCase();

    switch (weatherType) {
      case "rain":
        return <Rain width="auto" height="45px" />;
      case "sunny":
        return <Sunny width="auto" height="45px" />;
      case "clouds":
        return <Cloudy width="auto" height="45px" />;
      default:
        return <Sunny width="auto" height="45px" />;
    }
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
          boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 6px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        }}
      >
        <Typography variant="h2" fontWeight="800" fontSize={"1rem"}>
          {hours}
        </Typography>
        <Typography variant="h2" fontWeight="800">
          {weatherSVG}
        </Typography>
        <Typography variant="h2" fontWeight={"800"} fontSize={"1rem"}>
          {convertCelsius()}°
        </Typography>
      </Box>
    </>
  );
};
