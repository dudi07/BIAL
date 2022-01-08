import axios from "axios";
import {
  FLIGHT_SEARCH_REQUEST,
  FLIGHT_SEARCH_SUCCESS,
  FLIGHT_SEARCH_FAIL,
  FLIGHT_DETAILS_REQUEST,
  FLIGHT_DETAILS_SUCCESS,
  FLIGHT_DETAILS_FAIL,
} from "../constants/flightConstants";
export const flightSearchAction = (origin, destination) => async (dispatch) => {
  try {
    dispatch({
      type: FLIGHT_SEARCH_REQUEST,
    });

    const { data } = await axios.get("/api/flights/", {
      params: {
        origin: origin,
        destination: destination,
      },
    });
    dispatch({
      type: FLIGHT_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FLIGHT_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ListFlightDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FLIGHT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/flights/${id}`);

    dispatch({
      type: FLIGHT_DETAILS_SUCCESS,
      payload: data,
    });
    localStorage.setItem("flight", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FLIGHT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
