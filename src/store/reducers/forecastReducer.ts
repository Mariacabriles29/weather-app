import {
  CurrentForecastAction,
  ForecastActionTypes,
  ForecastState,
} from "../../helpers/forecastTypes";

const initialState = {
  currentForecast: [],
};

const forecastReducer = (
  state = initialState,
  action: CurrentForecastAction
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.CURRENT_FORECAST:
      const newForecast = {
        ...state,
        currentForecast: action.payload,
      };

      return {
        ...newForecast,
      };

    default:
      return state;
  }
};

export default forecastReducer;
