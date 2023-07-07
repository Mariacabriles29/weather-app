export interface Forecast {
  forecast: [];
}

export interface ForecastState {
  currentForecast: Forecast[];
}
export enum ForecastActionTypes {
  CURRENT_FORECAST = "CURRENT_FORECAST ",
}
export interface CurrentForecastAction {
  type: ForecastActionTypes.CURRENT_FORECAST;
  payload: any;
}

export type ForecastActionTypesAction = CurrentForecastAction;
