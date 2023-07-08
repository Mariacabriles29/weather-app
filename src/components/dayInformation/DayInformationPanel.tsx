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
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Sunny from "./Sunny";
import SearchIcon from "@mui/icons-material/Search";
import { WeatherData } from "../weather/weatherInfo";
import Rain from "./Rain";
import Cloudy from "./Cloudy";
import { useDispatch, useSelector } from "react-redux";

import { getForecast } from "../../store/acctions/forecastAccions";
import { TodaysInformationPanel } from "../todaysforescat/TodaysInformationPanel";
import moment from "moment";
import { ForecastData, ListForecast } from "../todaysforescat/forecastInfo";

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
  const ListForecast: ListForecast = useSelector((state: any) => {
    return state.forecast.currentForecast;
  });
  const { currentWeather, handleSearchTerm } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForecast() as any);
  }, []);

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
    if (currentWeather.weather[0].main.toLowerCase() === "rain") {
      return <Rain width="200px" height="auto" />;
    } else if (currentWeather.weather[0].main.toLowerCase() === "sunny") {
      return <Sunny width="200px" height="auto" />;
    } else if (currentWeather.weather[0].main.toLowerCase() === "clouds") {
      return <Cloudy width="200px" height="auto" />;
    } else {
      return <Sunny width="200px" height="auto" />;
    }
  };

  const getNewListForescast = () => {
    try {
      const data = ListForecast.list.filter((w: ForecastData) => {
        const currentTime = moment(w.dt_txt);
        if (currentTime.isSame(moment("15:00", "HH:mm"))) {
          return w;
        } else if (currentTime.isSame(moment("03:00", "HH:mm"))) {
          return w;
        } else if (currentTime.isSame(moment("12:00", "HH:mm"))) {
          return w;
        } else if (currentTime.isSame(moment("18:00", "HH:mm"))) {
          return w;
        } else if (currentTime.isSame(moment("06:00", "HH:mm"))) {
          return w;
        } else if (currentTime.isSame(moment("21:00", "HH:mm"))) {
          return w;
        }
      });
      return data;
    } catch (error) {
      return [];
    }
  };

  const checkWeatherDays = () => {
    const listDays = getNewListForescast();

    if (listDays.length === 0) {
      return (
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" fontWeight={800} textAlign={"center"}>
            No hay datos para mostrar
          </Typography>
        </Box>
      );
    } else {
      return getNewListForescast().map((w: ForecastData) => {
        return <TodaysInformationPanel currentForecast={w} />;
      });
    }
  };

  return (
    <>
      {currentWeather.main === undefined && <>loading...</>}
      {currentWeather.main && (
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <AppBar
              position="static"
              sx={{ width: "100%", borderRadius: "10px" }}
            >
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
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <Card sx={{ width: "100%" }} variant="outlined">
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={6}
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
                    <Typography
                      variant="h6"
                      component="div"
                      mt={"-1.5rem"}
                    ></Typography>
                    change of rain {currentWeather.main.humidity} %
                    <Typography variant="h2" fontWeight={"800"} mt={"2rem"}>
                      {convertCelsius()}°
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {checkWeather()}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#eaecef",
              width: "100%",
              borderRadius: "10px",
              height: "100%",
              marginTop: "2rem",
              display: "flex",
            }}
          >
            {checkWeatherDays()}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#eaecef",
              width: "100%",
              borderRadius: "10px",
              height: "100%",
              marginTop: "2rem",
              display: "flex",
            }}
          >
            kjhgf
          </Grid>
        </Grid>
      )}
    </>
  );
};
