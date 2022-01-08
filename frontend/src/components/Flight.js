import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ListFlightDetailsAction } from "../actions/flightActions";

const Flight = ({ flight }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const bookFlightHandler = () => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(ListFlightDetailsAction(flight._id));
    console.log(location);
    navigate("/flight/booking");
  };

  return <div>Flights</div>;
};

export default Flight;
