import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ExitToAppOutlined } from "@mui/icons-material";
import { WeatherCard } from "./WeatherCard";

export const Weather = () => {
  // const [temperature, setTemperature] = useState<number>();
  // const [isSunny, setIsSunny] = useState(true);
  // const [isRaining, setIsRaining] = useState(false);

  // const updateTemperature = (newTemperature: number) => {
  //   setTemperature(newTemperature);
  // };

  // const toggleSunny = () => {
  //   setIsSunny(!isSunny);
  // };

  // const toggleRaining = () => {
  //   setIsRaining(!isRaining);
  // };

  return (
    <Grid container>
      <Box
        sx={{
          width: "100%",
          marginTop: "4rem",
          display: "flex",
          justifyContent: "space-evenly",
          height: "100px",
        }}
      >
        <Typography
          component="h1"
          gutterBottom
          sx={{
            fontSize: "3rem",
            textAlign: "center",
            fontFamily: "roboto-bold",
          }}
        >
          THE WEATHER FORESCAST
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "-9rem",
          paddingRight: "20px",
        }}
      >
        <Button variant="contained" endIcon={<ExitToAppOutlined />}>
          Exit
        </Button>
      </Box>

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
    </Grid>
  );
};
