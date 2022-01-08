import axios from "axios";
import {
  BOOKING_CREATE_REQUEST,
  BOOKING_CREATE_SUCCESS,
  BOOKING_CREATE_FAIL,
  BOOKING_CREATE_RESET,
  BOOKING_DETAILS_REQUEST,
  BOOKING_DETAILS_SUCCESS,
  BOOKING_DETAILS_FAIL,
  BOOKING_LIST_FAIL,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
} from "../constants/bookingConstants";
import { logoutAction } from "./userActions";

export const createBookingAction = (booking) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKING_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `http://127.0.0.1:5000/api/bookings/`,
      booking,
      config
    );

    dispatch({
      type: BOOKING_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: BOOKING_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listBookingAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKING_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`api/bookings/mybookings`, config);

    dispatch({
      type: BOOKING_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: BOOKING_LIST_FAIL,
      payload: message,
    });
  }
};
export const getBookingDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BOOKING_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`api/bookings/${id}`, config);

    dispatch({
      type: BOOKING_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logoutAction());
    }
    dispatch({
      type: BOOKING_DETAILS_FAIL,
      payload: message,
    });
  }
};
