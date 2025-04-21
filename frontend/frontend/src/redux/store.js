import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { loginReducer } from "./reducer/loginReducer";
import { registerReducer } from "./reducer/registerReducer";

const rootReducer = combineReducers({
  registerData: registerReducer,
  loginData: loginReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
);
