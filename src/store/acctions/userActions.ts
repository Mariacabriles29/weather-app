import { ThunkDispatch } from "redux-thunk";
import { UserAction, UserActionTypes } from "../../helpers/userTypes";
import axios from "axios";

export const getUsers = () => {
  return async (dispatch: ThunkDispatch<{}, void, UserAction>) => {
    dispatch({ type: UserActionTypes.GET_USERS_REQUEST });

    try {
      // Simulación de una llamada a una API con datos de usuarios
      const response = await axios.get("https://api.escuelajs.co/api/v1/users");

      dispatch({
        type: UserActionTypes.GET_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: UserActionTypes.GET_USERS_FAILURE,
        payload: error.message,
      });
    }
  };
};
