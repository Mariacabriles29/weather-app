import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/weatherReducer";
import userReducer from "./reducers/userReducer";

// Combine os redutores específicos da sua aplicação
const rootReducer = combineReducers({
  weather: weatherReducer,
  user: userReducer,
});

// Crie a loja Redux com os redutores combinados e o middleware Redux Thunk
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
