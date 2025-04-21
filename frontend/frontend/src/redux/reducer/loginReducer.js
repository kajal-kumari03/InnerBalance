import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../action/action";

const initialState = {
  isLoading: false,
  users: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, users: action.payload.user, error: null };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};