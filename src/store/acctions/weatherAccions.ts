import { ThunkDispatch } from "redux-thunk";
import { UserAction, UserActionTypes } from "../../helpers/userTypes";
import axios from "axios";
import { WeatherAction, WeatherActionTypes } from "../../helpers/weatherTypes";

export const getWeather = () => {
  return async (dispatch: ThunkDispatch<{}, void, WeatherAction>) => {
    try {
      // Simulación de una llamada a una API con datos de usuarios
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Venezuela,ve&APPID=6c04e8fdb17249c9081540db3e4210aa"
      );
      dispatch({
        type: WeatherActionTypes.CURRENT_WEATHER,
        payload: response.data,
      });
    } catch (error: any) {
      //   dispatch({
      //     type: WeatherActionTypes.CURRENT_WEATHER,
      //     payload: error.message,
      //   });
    }
  };
};
