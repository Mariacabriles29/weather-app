import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Img from "../../resources/img/home.jpg";

import { useState } from "react";

export const LoginPage = () => {
  const defaultTheme = createTheme();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ minHeight: "100vh", overflow: "hidden" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={Img}
            alt="login"
            style={{ width: "100%", height: "auto" }}
            // height={"100%"}
          />
        </Grid>
        <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                flexDirection: "column",
                width: "500px",
                height: "auto",
                alignItems: "center",
                backgroundColor: "rgb(15, 98, 254)",
                padding: "36px",
                clipPath:
                  "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Grid item sx={{ alignItems: "center" }}>
                <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                  Login
                </Typography>
              </Grid>

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={username}
                  onChange={handleUserName}
                  autoComplete="email"
                  autoFocus
                  style={{ backgroundColor: "white" }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  autoComplete="current-password"
                  style={{ backgroundColor: "white" }}
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  Iniciar sesion
                </Button>
                <Grid container>
                  <Grid item xs sx={{ zIndex: "99" }}>
                    <Link
                      to="/register"
                      className="link"
                      style={{ color: "white", marginLeft: "2rem" }}
                    >
                      Olvidaste contraseña?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      to="/register"
                      className="link"
                      style={{ color: "white", marginRight: "2rem" }}
                    >
                      {"Ya tienes cuenta? Registrate"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
