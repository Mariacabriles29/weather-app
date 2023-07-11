import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Umbrella from "./Umbrella";
import Clouds from "./Clouds";
import Typography from "@mui/material/Typography";
import Cities from "./Cities";
import Map from "./Map";
import Settings from "./Settings";

export const SliderPanel = () => {
  return (
    <Grid container>
      {/* Hago el primer grid item para centrar el componente que esta dentro del segundo grid item  */}
      <Grid item xs={12} md={4}></Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#eaecef",
            // height: "max-content",
            // minHeight: "500px",
          }}
        >
          <CardContent>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Umbrella width="30px" height="30px" />
            </Box>

            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "3rem",
              }}
            >
              <Clouds width="30px" height="30px" />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center", fontWeight: "800", fontSize: "1rem" }}
            >
              Weather
            </Typography>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Cities width="30px" height="30px" />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center", fontWeight: "400", fontSize: "1rem" }}
            >
              Cities
            </Typography>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Map width="30px" height="30px" />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center", fontWeight: "400", fontSize: "1rem" }}
            >
              Map
            </Typography>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Settings width="30px" height="30px" />
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center", fontWeight: "400", fontSize: "1rem" }}
            >
              Settings
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
