import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { authReducer, authReducer2 } from "./Auth/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  authLogin: authReducer2,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
