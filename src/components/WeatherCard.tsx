import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface WeatherCardProps {
  temperature: number;
  isSunny: boolean;
  isRanning: boolean;
}

export const WeatherCard = ({
  temperature,
  isSunny,
  isRanning,
}: WeatherCardProps) => {
  return (
    <Box sx={{ minWidth: "100%" }}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 2,
            }}
          >
            {isSunny ? (
              <WbSunnyIcon sx={{ fontSize: 48 }} />
            ) : (
              <CloudIcon sx={{ fontSize: 48 }} />
            )}
          </Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {temperature}°C
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
