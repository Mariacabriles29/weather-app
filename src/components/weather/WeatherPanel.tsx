import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
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

export const WeatherPanel = () => {
  const weather = useSelector((state: any) => {
    return state.weather.currentWeather;
  });
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather() as any);
  }, []);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
            alignItems: "center",
          }}
        >
          <SliderPanel />
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
            backgroundColor: "#eaecef",
            width: "100%",
            borderRadius: "10px",
          }}
        ></Grid>
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
