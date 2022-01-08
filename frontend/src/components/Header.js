import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/userActions";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const showNotifications = () => {
    console.log("Your have new notifications");
  };
  return (
    <>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M0 213.753c2.182-44.28 22.487-83.376 65.448-108.665C125.266 69.876 185.622 35.578 245.706.818c2.486-1.437 3.21-1.024 4.222 1.585 14.476 37.33.561 76.781-25.458 99.94-2.263 2.014-4.82 3.62-7.444 5.135-31.272 18.04-62.537 36.091-93.792 54.158-4.467 2.582-6.704 6.86-6.007 11.226.762 4.775 4.62 8.731 9.374 9.595 3.068.557 5.673-.695 8.211-2.16 30.664-17.696 61.326-35.395 91.987-53.093 2.916-1.684 5.88-3.29 8.724-5.087 1.641-1.038 2.346-.674 2.99 1.063 4.486 12.123 6.884 24.596 5.991 37.543-1.958 28.376-14.332 51.273-37.586 67.571-11.176 7.834-23.537 13.978-35.371 20.87-5.317 3.096-10.506 6.463-16.022 9.156-12.522 6.114-18.594 16.866-21.363 29.696-5.728 26.537 15.291 51.943 42.454 51.71 1.5-.012 2.998-.27 4.495-.435 1.334-.148 2.378.382 2.724 1.628.327 1.175-.49 2.005-1.54 2.398-3.468 1.3-6.913 2.695-10.453 3.768C102.34 368.16 27.035 327.95 5.905 258.501 1.957 245.52.31 232.194 0 213.753"
                fill="#00ACEE"
              />
            </svg>
            <span className="font-semibold text-xl tracking-tight mx-2">
              BIAL
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="/flight"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4"
              >
                Flight
              </a>
              <a
                href="/cab_booking"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4"
              >
                Cab
              </a>
              <a
                href="/explore"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4"
              >
                Explore
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  onClick={showNotifications}
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeline="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <div className="ml-3 relative">
                  <div>
                    {userInfo == null ? (
                      <a href="/register" className="mx-3">
                        Signup
                      </a>
                    ) : (
                      <button
                        className=" max-w-xs bg-gray-800 rounded-full block content-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mx-3 "
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    )}
                  </div>

                  <div
                    className={
                      isOpen == true
                        ? "hidden"
                        : "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    }
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white "
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>

                    <a
                      href="/bookings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Your Bookings
                    </a>

                    <a
                      type="button"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white "
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                      onClick={logoutHandler}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
