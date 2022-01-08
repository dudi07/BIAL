import {
  FLIGHT_LIST_REQUEST,
  FLIGHT_LIST_SUCCESS,
  FLIGHT_LIST_FAIL,
  FLIGHT_SEARCH_REQUEST,
  FLIGHT_SEARCH_SUCCESS,
  FLIGHT_SEARCH_FAIL,
  FLIGHT_DETAILS_REQUEST,
  FLIGHT_DETAILS_SUCCESS,
  FLIGHT_DETAILS_FAIL,
} from "../constants/flightConstants";

export const flightSearchReducer = (state = { flights: [] }, action) => {
  switch (action.type) {
    case FLIGHT_SEARCH_REQUEST:
      return { loading: true, flights: [] };
    case FLIGHT_SEARCH_SUCCESS:
      return { loading: false, flights: action.payload };
    case FLIGHT_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const flightDetailsReducer = (state = { flight: {} }, action) => {
  switch (action.type) {
    case FLIGHT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case FLIGHT_DETAILS_SUCCESS:
      return { loading: false, flight: action.payload };
    case FLIGHT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
