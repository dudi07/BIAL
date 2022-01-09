import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../images/Bangalore-Check-in-Hall-Rendering-1.jpg";
import image2 from "../images/BIAL-Duty-Free-store.jpg";
import image3 from "../images/istock-460796077-cropped-1599459203.jpg";
import image4 from "../images/Quad-by-BLR-large-3.jpeg";
import image5 from "../images/maxresdefault.jpg";
import image6 from "../images/5c5bfc00bb324a2cbb072cf0_1549532160191-1.jpg";
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
            You Can Find Best Deals Here
          </h1>
        </div>
        <div className="flex flex-col item-center justify-center p-4">
          <div className="flex flex-row item-center justify-center ">
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={image1} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Commercial Space
                </header>
                <div className="p-8">
                  <p className="">Places Where Business Grows</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white  font-extrabold"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={image6} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  For Kids
                </header>
                <div className="p-8">
                  <p className="">Best Store For Kids</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white  font-extrabold"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg mb-10">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={image2} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Duty Free Shops
                </header>
                <div className="p-8">
                  <p className="">Duty Free Shops</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row item-center justify-center ">
            <div className="bg-white  flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col ">
                <img src={image3} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Buy Anything
                </header>
                <div className="p-8">
                  <p className="">Best Deal</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={image4} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Take Banglore's Specials
                </header>
                <div className="p-8">
                  <p className="">The warmest place on earth</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white flex item-center justify-center mx-10 rounded-lg">
              <div className="bg-white rounded-lg shadow-2xl flex flex-col">
                <img src={image5} className="rounded-t-lg object-cover" />
                <header className="bg-gray-200 rounded-t-lg py-3 px-8 text-xl font-extrabold">
                  Shop Now
                </header>
                <div className="p-8">
                  <p className="">Best Deals</p>
                  <button
                    onClick={onClickHandler}
                    className="bg-blue-400 w-40 rounded-lg py-4 px-4 mt-5 hover:text-white font-extrabold"
                  >
                    Know More
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
