import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Img from "../../resources/img/register.jpg.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserActionTypes } from "../../helpers/userTypes";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "@mui/icons-material";

export const RegisterPage = () => {
  const defaultTheme = createTheme();
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const users = useSelector((state: any) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);

    // Construir el objeto de usuario
    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
    };

    try {
      // Realizar la solicitud POST con Axios
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users",
        newUser
      );

      // Verificar si la solicitud fue exitosa
      if (response.status === 201) {
        // Llamar a la acción de registro del usuario usando Redux
        dispatch({
          payload: newUser,
          type: UserActionTypes.GET_USERS_SUCCESS,
        });
        navigate("/login");
        console.log("El usuario fue creado correctamente");
      } else {
        console.log("Error en la solicitud de registro");
      }
    } catch (error) {
      console.log("Error en la solicitud de registro", error);
    }
    console.log(newUser);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container spacing={2} sx={{ height: "100vh", overflow: "hidden" }}>
        <Grid item xs={12} md={6}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 15,
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
                backgroundColor: "rgb(0 228 201)",
                padding: "30px",
                borderRadius: "5px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                fontSize="2rem"
                sx={{ color: "white" }}
              >
                Registrate
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    alignItems: "center",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <Grid item xs={12} sx={{ mt: "2rem" }}>
                    <TextField
                      autoComplete="given-name"
                      name="name"
                      label="Nombre Completo"
                      required
                      fullWidth
                      autoFocus
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      style={{ backgroundColor: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="email"
                      label="Correo"
                      placeholder="Ingrese su correo"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      style={{ backgroundColor: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      type="password"
                      label="Contraseña"
                      placeholder="Ingrese su contraseña"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      style={{ backgroundColor: "white" }}
                    />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 1,
                      }}
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      Registrarme
                    </Button>
                  </Grid>

                  <Grid container direction="row" justifyContent="end">
                    <Grid item>
                      <Link
                        to="/login"
                        className="link"
                        style={{ color: "blue" }}
                      >
                        {"Ya tienes cuenta? Ingresa"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <img
            src={Img}
            alt="register"
            style={{ minWidth: "50%" }}
            height={"100%"}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
