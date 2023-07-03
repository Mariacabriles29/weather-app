import {
  WeatherState,
  WeatherActionTypes,
  WeatherAction,
} from "../../helpers/weatherTypes";

const initialState = {
  currentWeather: [],
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.CURRENT_WEATHER:
      const newWeather = {
        ...state,
        currentWeather: action.payload,
      };

      return {
        ...newWeather,
      };

    default:
      return state;
  }
};

export default weatherReducer;
