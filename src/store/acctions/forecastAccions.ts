import { ThunkDispatch } from "redux-thunk";

import axios from "axios";
import {
  CurrentForecastAction,
  ForecastActionTypes,
} from "../../helpers/forecastTypes";

export const getForecast = () => {
  return async (dispatch: ThunkDispatch<{}, void, CurrentForecastAction>) => {
    try {
      // Simulación de una llamada a una API con datos de usuarios
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6c04e8fdb17249c9081540db3e4210aa"
      );
      dispatch({
        type: ForecastActionTypes.CURRENT_FORECAST,
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
