import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";

const FlightSearchResultScreen = () => {
  const flightSearch = useSelector((state) => state.flightSearch);
  const { loading, error, flights } = flightSearch;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();
  const flight = flights[0];
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    console.log(flight);
  });
  const handleBooking = () => {
    navigate("/bookingConfirmation");
  };
  return (
    <>
      <div className="flex flex-col bg-slate-900  justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger" error />
        ) : (
          <>
            <div className="flex flex-row justify-center items-center p-3 m-3 ">
              <div className="flex flex-col items-left border-2 rounded-sm border-teal-500 w-24 bg-gray-900 m-2">
                <h2 className="text-xs mb-1 font-size-sm uppercase text-blue-500 tracking-normal ml-1 ">
                  Trip
                </h2>
                <h1 className="text-white font-bold ml-1 capitalize">
                  One Way
                </h1>
              </div>
              <div className="flex flex-col items-left border-2 rounded-sm border-teal-500 w-48 bg-gray-900 m-2">
                <h2 className="text-xs mb-1 font-size-sm uppercase text-blue-500 tracking-normal ml-1 ">
                  From
                </h2>
                <h1 className="text-white font-bold ml-1 capitalize">
                  {flight.origin}
                </h1>
              </div>
              <div className="flex flex-col items-left border-2 rounded-sm border-teal-500 w-48 bg-gray-900 m-2">
                <h2 className="text-xs mb-1 font-size-sm uppercase text-blue-500 tracking-normal ml-1 ">
                  To
                </h2>
                <h1 className="text-white font-bold ml-1 capitalize">
                  {flight.destination}
                </h1>
              </div>
              <div className="flex flex-col items-left border-2 rounded-sm border-teal-500 w-48 bg-gray-900 m-2">
                <h2 className="text-xs mb-1 font-size-sm uppercase text-blue-500 tracking-normal ml-1 ">
                  Depart
                </h2>
                <h1 className="text-white font-bold ml-1 capitalize">
                  {flight.origin}
                </h1>
              </div>
              <div className="flex flex-col items-left border-2 rounded-sm border-teal-500 w-48 bg-gray-900 m-2">
                <h2 className="text-xs mb-1 font-size-sm uppercase text-blue-500 tracking-normal ml-1 ">
                  Passengers{" "}
                </h2>
                <h1 className="text-white font-bold ml-1 capitalize">
                  1 Adult,Economy
                </h1>
              </div>
            </div>
            <div className="flex  h-48 w-full rounded-sm items-center justify-center">
              <div className="flex flex-col  justify-center m-7 bg-white rounded-sm w-1/2">
                <div>
                  <h3 className="font-bold text-black mr-2">
                    {flight.airline}
                  </h3>
                </div>
                <div className="flex flex-row ">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-black mr-10">
                      {flight.scheduledDepartureTime}
                    </h3>
                    <h3 className="font text-black mr-10">{flight.origin}</h3>
                  </div>

                  <div className="font-bold text-black mx-5"> to </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-black ml-10">
                      {flight.scheduledArrivalTime}
                    </p>
                    <p className="font text-black ml-10">
                      {flight.destination}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-black mx-10">Price</p>
                    <p className="font-bold text-black mx-10">{flight.price}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-48 h-18 text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-md"
                      onClick={handleBooking}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FlightSearchResultScreen;
