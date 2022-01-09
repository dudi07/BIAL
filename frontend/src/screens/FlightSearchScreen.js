import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flightSearchAction } from "../actions/flightActions";

import { useLocation, useNavigate } from "react-router-dom";

const FlightSearchScreen = () => {
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const flightSearch = useSelector((state) => state.flightSearch);
  const { loading, error, flights } = flightSearch;

  const location = useLocation();
  const navigate = useNavigate();
  // const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    console.log(location);
  }, [flightSearch, dispatch]);
  const flight = flights[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(flightSearchAction(origin, destination));
    navigate(
      `/flightSearch/?origin=${origin}&destination=${destination}&date=${date}`
    );
    console.log(flight);
  };

  return (
    <>
      <div className="flex flex-wrap bg-gray-900 item-center justify-center">
        <div className="p-3">
          <h1 className="text-3xl text-teal-100 font-bold tracking-wide m-5">
            Search Flights
          </h1>
        </div>
      </div>
      <div className="flex flex-auto "></div>
      <div className="flex flex-row item-center justify-center">
        <div className="flex m-3 form-floating mb-3 xl:w-96">
          <input
            type="text"
            name="origin"
            id="origin"
            placeholder="From"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex m-3 form-floating mb-3 xl:w-96">
          <input
            type="text"
            name="destination"
            id="origin"
            placeholder="To"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
      </div>
      <div className="flex m-4 item-center justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-48 h-18 text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default FlightSearchScreen;
