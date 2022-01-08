import {
  BOOKING_CREATE_REQUEST,
  BOOKING_CREATE_SUCCESS,
  BOOKING_CREATE_FAIL,
  BOOKING_CREATE_RESET,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
  BOOKING_LIST_FAIL,
  COMPLETED_BOOKING_DETAILS_REQUEST,
  COMPLETED_BOOKING_DETAILS_SUCCESS,
  COMPLETED_BOOKING_DETAILS_FAIL,
} from "../constants/bookingConstants";

export const createBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_CREATE_REQUEST:
      return {
        loading: true,
      };
    case BOOKING_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        booking: action.payload,
      };
    case BOOKING_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case BOOKING_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const bookingListReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case BOOKING_LIST_REQUEST:
      return {
        loading: true,
      };
    case BOOKING_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        bookings: action.payload,
      };
    case BOOKING_LIST_FAIL:
      return {
        loading: false,
        success: false,
      };
  }
};

export const bookingDetailReducer = (state = { booked: {} }, action) => {
  switch (action.type) {
    case COMPLETED_BOOKING_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case COMPLETED_BOOKING_DETAILS_SUCCESS:
      return {
        loading: true,
        booked: action.payload,
      };
    case COMPLETED_BOOKING_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
  }
};
