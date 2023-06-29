export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  currentUser: string | null;
}

export enum UserActionTypes {
  GET_USERS_REQUEST = "GET_USERS_REQUEST",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  GET_USERS_FAILURE = "GET_USERS_FAILURE",
  CHECK_LOGIN = "CHECK_LOGIN",
}

interface GetUsersRequestAction {
  type: UserActionTypes.GET_USERS_REQUEST;
}

interface GetUsersSuccessAction {
  type: UserActionTypes.GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersFailureAction {
  type: UserActionTypes.GET_USERS_FAILURE;
  payload: string;
}
interface CHECK_LOGIN {
  type: UserActionTypes.CHECK_LOGIN;
  payload: any;
}

export type UserAction =
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailureAction
  | CHECK_LOGIN;
