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
import { useDispatch, useSelector } from "react-redux";
import { UserActionTypes } from "../../helpers/userTypes";
import { ToastContainer, toast } from "react-toastify";

export const LoginPage = () => {
  const defaultTheme = createTheme();
  const users = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = users.find(
      (u: any) =>
        `${u.email}`.toLowerCase() === username.toLowerCase() &&
        `${u.password}`.toLowerCase() === password.toLowerCase()
    );
    console.log(user);

    if (user) {
      dispatch({
        type: UserActionTypes.CHECK_LOGIN,
        payload: user,
      });
      navigate("/weather");
      toast.success("Inicio exitoso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error al iniciar", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log(users);
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
                borderRadius: "5px",
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
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Recordarme"
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
                      {"No tienes cuenta? Registrate"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
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
      </Grid>
    </ThemeProvider>
  );
};
