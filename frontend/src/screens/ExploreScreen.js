import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/leh-ladakh-495x330.jpg";
import goa from "../images/goa.jpg";
import rajasthan from "../images/Rajasthan.jpg";
import northEast from "../images/NorthEast.jpg";
import { useNavigate } from "react-router-dom";

const ExploreScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    navigate("/flight");
  };
  return (
    <div>
      <div className=" justify-center items-center min-h-screen  dark:bg-gray-900 ">
        <div className="flex flex-col  justify-items-center items-center ">
          <h1 className="font-sans my-4  font-bold tracking-wide leading-loose text-white text-4xl">
            Take Some Workations
          </h1>
        </div>
        <div className="flex flex-col item-center justify-center p-4">
          <div className="flex flex-row item-center justify-center ">
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={logo} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Ladakh
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white  font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={goa} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Goa
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white  font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={northEast} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  North East
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row item-center justify-center ">
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={logo} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Manali
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={logo} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Kerala
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={rajasthan} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Rajasthan
                </header>
                <div className="p-8">
                  <p className="">Padharo Mahre Des</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreScreen;
