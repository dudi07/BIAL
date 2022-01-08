import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ListBookings = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, bookings } = bookingList;

  useEffect(() => {
    if (userInfo) {
      dispatch(listBookingAction());
    } else {
      Navigate("/login");
    }
  });

  return <div></div>;
};

export default ListBookings;
