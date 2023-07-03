export interface Weather {
  weather: [];
}

export interface WeatherState {
  currentWeather: Weather[];
}
export enum WeatherActionTypes {
  CURRENT_WEATHER = "CURRENT_WEATHER ",
}
export interface CurrentWeatherAction {
  type: WeatherActionTypes.CURRENT_WEATHER;
  payload: any;
}

export type WeatherAction = CurrentWeatherAction;
