import {
  UserState,
  UserAction,
  UserActionTypes,
} from "../../helpers/userTypes";

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  currentUser: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case UserActionTypes.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserActionTypes.CHECK_LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
