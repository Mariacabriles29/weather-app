export interface Weather {
  /*ojo esto debo cambiarlo  */
  weather: [];
  forecast: string;
  loading: false;
  error: null;
}

export interface WeatherState {
  weathers: Weather[];
}
export enum WeatherActionTypes {
  ADD_WEATHER = "ADD_WEATHER",
}
export interface AddWeatherAction {
  type: WeatherActionTypes.ADD_WEATHER;
  payload: any;
}

export type WeatherAction = AddWeatherAction;
