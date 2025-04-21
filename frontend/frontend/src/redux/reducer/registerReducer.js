import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "../action/action";

const initialState = {
  isLoading: false,
  isError: false,
  users: { userName: "", email: "", password: "", role: "" }
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false, users: action.payload.user };
    case FETCH_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};