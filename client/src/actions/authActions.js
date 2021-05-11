import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
import { Route } from "react-router";

// Register User
export const registerUser = (userData) => async dispatch => {
  console.log("here")
  console.log(userData);
  try {
    const res = axios
      .post('http://localhost:3001/api/users/register', userData);
    return;
  } catch (err) {
    console.log(err);
    return dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Login - get user token
export const loginUser = (userData) => async dispatch => {
  axios
    .post('http://localhost:3001/api/users/login', userData)
    .then(res => {
      // Save to localStorage

// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};