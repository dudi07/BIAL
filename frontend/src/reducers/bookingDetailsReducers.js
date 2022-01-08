import {
  ADD_CAB_TO_DESTINATION,
  ADD_PASSENGER_TO_BOOKING,
  ADD_PAYMENT_METHOD,
  REMOVE_PASSENGER_FROM_BOOKING,
} from "../constants/bookingDetailsConstants";

export const addBookingDetailsReducer = (
  state = { passengers: [], paymentMethod: "", cabDetails: {} },
  action
) => {
  switch (action.type) {
    case ADD_PASSENGER_TO_BOOKING:
      const newPassengers = action.payload;
      return {
        ...state,
        passengers: newPassengers,
      };

    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case ADD_CAB_TO_DESTINATION:
      return {
        ...state,
        cabDetails: action.payload,
      };
    default:
      return state;
  }
};
