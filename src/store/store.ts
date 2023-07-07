import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./reducers/weatherReducer";
import userReducer from "./reducers/userReducer";
import thunkMiddleware from "redux-thunk";
import forecastReducer from "./reducers/forecastReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  users: userReducer,
  forecast: forecastReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
