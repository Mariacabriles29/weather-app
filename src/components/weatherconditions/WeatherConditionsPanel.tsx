import { WeatherData } from "../weather/weatherInfo";
import { Box, Button, Typography } from "@mui/material";
import Temperature from "./Temperature";
import Drop from "./Drop";
import Wind from "./Wind";
import UvIndex from "./UvIndex";

interface WeatherConditionsPanelProps {
  currentWeather: WeatherData;
}
export const WeatherConditionsPanel = (props: WeatherConditionsPanelProps) => {
  const { currentWeather } = props;
  const convertCelsius = () => {
    try {
      const gradesFahrenheit = currentWeather.main.temp;
      let celsius = gradesFahrenheit - 273.15;
      const result = celsius.toFixed(0);
      return result;
    } catch (error) {
      return `0°`;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "left",
          alignSelf: "flex-start",
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          fontWeight={"400"}
          fontSize={"1rem"}
          mt={"1rem"}
          marginLeft={"11px"}
        >
          AIR CONDITIONS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingBottom: "16px",
          paddingTop: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              minWidth: "200px",
            }}
          >
            <Box sx={{ height: "fit-content" }}>
              <Temperature width="30px" height="auto" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginLeft: "9px",
              }}
            >
              <Typography variant="h1" component="h2" fontSize={"1rem"}>
                Real Feel
              </Typography>
              <Typography variant="h3" fontWeight={"800"} fontSize={"1rem"}>
                {convertCelsius()}°
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: "200px",
              marginLeft: "9px",
              marginTop: "14px",
            }}
          >
            <Box sx={{ height: "fit-content" }}>
              <Drop width="30px" height="auto" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h1" component="h2" fontSize={"1rem"}>
                Change of Rain
              </Typography>

              <Typography variant="h3" fontWeight={"800"} fontSize={"1rem"}>
                {currentWeather.main.humidity} %
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: "200px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ height: "fit-content" }}>
              <Wind width="30px" height="auto" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "8px",
              }}
            >
              <Typography variant="h1" component="h2" fontSize={"1rem"}>
                Wind
              </Typography>
              <Typography variant="h3" fontWeight={"800"} fontSize={"1rem"}>
                {currentWeather.wind.speed} Km/h
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              minWidth: "200px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: "14px",
            }}
          >
            <Box sx={{ height: "fit-content" }}>
              <UvIndex width="30px" height="auto" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginLeft: "8px",
              }}
            >
              <Typography variant="h1" component="h2" fontSize={"1rem"}>
                Uv Index
              </Typography>
              <Typography variant="h3" fontWeight={"800"} fontSize={"1rem"}>
                {currentWeather.wind.deg}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
