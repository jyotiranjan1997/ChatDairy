import { GET_LOCAL, REMOVE_LOCAL, SET_LOCAL } from "../../utils/LocalData";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./authType";

const initialState = {
  auth: false,
  loading: false,
  error: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQ: {
      return { ...state, loading: true };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, loading: false, auth: true,error:false };
    }
    case SIGNUP_FAILURE: {
      return { ...state, loading: false, error: payload };
    }

    default: {
      return state;
    }
  }
};

const initialState2 = {
  authToken: GET_LOCAL("auth_token"),
  is_loading: false,
  is_error: false,
};

export const authReducer2 = (state = initialState2, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ: {
      return { ...state, is_loading: true };
    }
    case LOGIN_SUCCESS: {
      SET_LOCAL("auth_token", payload);
      return { ...state, is_loading: false, authToken: payload ,is_error:false };
    }
    case LOGIN_FAILURE: {
      return { ...state, is_loading: false, is_error: payload };
    }
    case LOGOUT: {
      REMOVE_LOCAL("auth_token");
      return { ...state, authToken: "" };
    }
    default: {
      return state;
    }
  }
};
