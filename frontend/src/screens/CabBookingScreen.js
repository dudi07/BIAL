import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCabToBooking } from "../actions/bookingDetailsActions";

const CabBookingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropLocation, setDropLocation] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [typeOfCab, setTypeOfCab] = useState("Mini");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addCabToBooking({ pickupLocation, dropLocation, typeOfCab }));
    navigate("/flight/payment");
  };
  useEffect(() => {}, [dispatch]);
  return (
    <>
      <div className="flex items-center min-h-screen  bg-cabBG bg-cover bg-center ">
        <div className="container mx-auto items-center col-auto">
          <div className="mb-6 text-gray-900 dark:text-gray-800">
            <h2>Making your journey easier</h2>
          </div>
          <div className=" h-90 w-110  grid grid-cols-3 gap-4">
            <form
              onSubmit={onSubmitHandler}
              className="p-2 border rounded-sm border-gray-700 "
            >
              <div className="mb-6 flex flex-wrap">
                <label
                  htmlFor="pickupLocation"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400 ml-1"
                >
                  Pickup
                </label>
                <input
                  type="pickupLocation"
                  name="pickupLocation"
                  id="pickupLocation"
                  placeholder="Your Location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-white-300 dark:bg-gray-400 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 ml-2"
                />
              </div>
              <div className="mb-6 flex flex-wrap">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400 mx-1"
                >
                  Drop
                </label>
                <input
                  type="DropLocation"
                  name="DropLocation"
                  id="DropLocation"
                  placeholder="Enter Drop"
                  value={dropLocation}
                  onChange={(e) => setDropLocation(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-white-300 dark:bg-gray-400 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 ml-3"
                />
              </div>
              <div className="mb-6 flex flex-wrap">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400 ml-1">
                  Ride
                </label>
                <select className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-white-300 dark:bg-gray-400 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 ml-2">
                  <option value="mini">Micro</option>
                  <option value="mini">Mini</option>
                  <option value="Prime Sedan">Prime Sedan</option>
                  <option value="Prime Suv">Prime Suv</option>
                </select>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-black rounded-md focus:bg-indigo-600 focus:outline-none "
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabBookingScreen;
