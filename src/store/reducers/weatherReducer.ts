import {
  WeatherState,
  WeatherActionTypes,
  WeatherAction,
} from "../../helpers/weatherTypes";

const initialState = {
  weathers: [],
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.ADD_WEATHER:
      const newWeather = {
        ...state,
        weathers: action.payload,
      };

      return {
        ...newWeather,
      };

    default:
      return state;
  }
};

export default weatherReducer;
