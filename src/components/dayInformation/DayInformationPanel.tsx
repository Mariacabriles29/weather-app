import {
  CardContent,
  CardActions,
  Button,
  styled,
  alpha,
  InputBase,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Sunny from "./Sunny";
import SearchIcon from "@mui/icons-material/Search";
import { WeatherData } from "../weather/weatherInfo";
import Rain from "./Rain";
import Cloudy from "./Cloudy";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface DayInformationPanelProps {
  currentWeather: WeatherData;
  handleSearchTerm: (search: string) => void;
}

export const DayInformationPanel = (props: DayInformationPanelProps) => {
  const { currentWeather, handleSearchTerm } = props;
  const [searchTerm, setSearchTerm] = useState("");

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
  const checkWeather = () => {
    if (currentWeather.weather[0]?.main.toLowerCase() === "rain") {
      return <Rain width="200px" height="auto" />;
    } else if (currentWeather.weather[0]?.main.toLowerCase() === "sunny") {
      return <Sunny width="200px" height="auto" />;
    } else if (currentWeather.weather[0]?.main.toLowerCase() === "clouds") {
      return <Cloudy width="200px" height="auto" />;
    } else {
      return <Sunny width="200px" height="auto" />;
    }
  };

  return (
    <>
      {currentWeather.main === undefined && <>loading...</>}
      {currentWeather.main && (
        <>
          <Box>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                ></Typography>
                <Search
                  onChange={(e: any) => {
                    setSearchTerm(e.target.value);
                    handleSearchTerm(e.target.value);
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Card sx={{ minWidth: "1000px" }} variant="outlined">
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <Typography variant="h2" fontWeight={"800"} gutterBottom>
                    {currentWeather.name}
                  </Typography>
                  <Typography variant="h6" component="div"></Typography>
                  {currentWeather.main.pressure}
                  <Typography variant="h2" fontWeight={"800"}>
                    {convertCelsius()}°
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {checkWeather()}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </>
      )}
    </>
  );
};
