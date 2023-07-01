import { CardContent, CardActions, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React from "react";
import Sunny from "./Sunny";

export const DayInformationPanel = () => {
  return (
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
              Venezuela
            </Typography>
            <Typography variant="h6" component="div">
              probabilidad de lluvia: 0%
            </Typography>

            <Typography variant="h2" fontWeight={"800"}>
              31°
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
            <Sunny width="200px" height="auto" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
