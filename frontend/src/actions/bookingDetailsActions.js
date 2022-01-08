import {
  ADD_PASSENGER_TO_BOOKING,
  REMOVE_PASSENGER_FROM_BOOKING,
  ADD_PAYMENT_METHOD,
  REMOVE_PAYMENT_METHOD,
  ADD_CAB_TO_DESTINATION,
} from "../constants/bookingDetailsConstants";

export const addPassengerAction = (passenger) => async (dispatch, getState) => {
  console.log(passenger);
  const data = passenger;
  dispatch({
    type: ADD_PASSENGER_TO_BOOKING,
    payload: data,
  });
};

export const removePassengerAction = () => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_PASSENGER_FROM_BOOKING,
  });
  localStorage.removeItem("passengers");
};

export const addPaymentMethodAction = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: ADD_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

export const addCabToBooking = (data) => async (dispatch) => {
  dispatch({
    type: ADD_CAB_TO_DESTINATION,
    payload: data,
  });
};
