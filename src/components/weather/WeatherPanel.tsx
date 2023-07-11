import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Header } from "../../layout/header/Header";
import { DayInformationPanel } from "../dayInformation/DayInformationPanel";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/acctions/weatherAccions";
import { SliderPanel } from "../slider/SliderPanel";
import { DayForecastPanel } from "../dayforecast/DayForecastPanel";
import { ForecastData, ListForecast } from "../todaysforescat/forecastInfo";
import { getForecast } from "../../store/acctions/forecastAccions";
import moment from "moment";

export const WeatherPanel = () => {
  const weather = useSelector((state: any) => {
    return state.weather.currentWeather;
  });
  const ListForecast: ListForecast = useSelector((state: any) => {
    return state.forecast.currentForecast;
  });
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather() as any);
  }, []);

  useEffect(() => {
    dispatch(getForecast() as any);
  }, []);

  const getNewListForecastDays = () => {
    try {
      const data = ListForecast.list.filter((we: ForecastData) => {
        const currentTime = moment(we.dt_txt);
        const hora = currentTime.format("HH:mm");
        if (hora === "00:00") {
          return we;
        }
      });
      return data;
    } catch (error) {
      return [];
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ width: "80%", height: "max-content", minHeight: "500px" }}>
            <SliderPanel />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <DayInformationPanel
            currentWeather={weather}
            handleSearchTerm={(search: string) => {
              setSearchTerm(search);
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "max-content",
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",

              backgroundColor: "#eaecef",
              boxShadow:
                "rgb(145 158 171 / 20%) 0px 0px 6px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
              padding: "0 16px",
              marginLeft: "23px",
            }}
          >
            <Typography
              variant="h1"
              component="h2"
              sx={{ fontSize: "1.5rem", padding: "8px", marginTop: "1rem" }}
            >
              5-DAYS FORECAST
            </Typography>
            {getNewListForecastDays().map((we: ForecastData) => {
              return <DayForecastPanel currentForecast={we} />;
            })}
          </Box>
        </Grid>
      </Grid>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};
