import axios from "axios";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQ,
  SIGNUP_SUCCESS,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./authType";

export const signup_req = () => {
  return { type: SIGNUP_REQ };
};

export const signup_sucess = (payload) => {
  return { type: SIGNUP_SUCCESS, payload };
};

export const signup_failed = (payload) => {
  return { type: SIGNUP_FAILURE, payload };
};

export const login_req = () => {
  return { type: LOGIN_REQ };
};

export const login_sucess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const login_failed = (payload) => {
  return { type: LOGIN_FAILURE, payload };
};

export const logout = () => {
  return { type: LOGOUT };
}

export const signup = (data) => async (dispatch) => {
  dispatch(signup_req());

  try {
    let res = await axios.post(
      "http://localhost:5000/user/signup",
      data
    );
    console.log(res.data)
    return dispatch(signup_sucess());
  } catch (err) {
    console.log(err, "err");
    return dispatch(
      signup_failed("Something went wrong to signup Please try again !")
    );
  }
};

export const login = (data) => async (dispatch) => {
  dispatch(login_req());

  try {
    let res = await axios.post(
      "http://localhost:5000/user/login",
      data
    );
    return dispatch(login_sucess(res.data.user_token));
  } catch (err) {
    return dispatch(
      login_failed("Something went wrong to login Please try again !")
    );
  }
};
