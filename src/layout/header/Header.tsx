import { ExitToAppOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { UserActionTypes } from "../../helpers/userTypes";
import { useDispatch } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: UserActionTypes.CHECK_LOGIN,
      payload: null,
    });
    navigate("/");
  };
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "4rem",
        display: "flex",
        height: "100%",
        paddingRight: "16px",
        paddingLeft: "16px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlignLast: "center",
        }}
      >
        <Typography
          component="h1"
          gutterBottom
          sx={{
            fontSize: "3rem",
            textAlign: "center",
            fontFamily: "roboto-bold",
            textAlignLast: "center",
          }}
        >
          THE WEATHER FORESCAST
        </Typography>
      </Box>

      <Button
        sx={{ marginRight: "16px", height: "50px" }}
        variant="contained"
        endIcon={<ExitToAppOutlined />}
        onClick={handleLogout}
      >
        Exit
      </Button>
    </Box>
  );
};
