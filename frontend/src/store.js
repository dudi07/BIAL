import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  flightDetailsReducer,
  flightSearchReducer,
} from "./reducers/flightReducers";
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import { createBookingReducer } from "./reducers/bookingReducers";
import { addBookingDetailsReducer } from "./reducers/bookingDetailsReducers";

const reducers = combineReducers({
  flightSearch: flightSearchReducer,
  flightDetails: flightDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  addBookingDetails: addBookingDetailsReducer,
  createBooking: createBookingReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const flightInfoFromStorage = localStorage.getItem("flight")
  ? JSON.parse(localStorage.getItem("flight"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  flightDetails: { flight: flightInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
