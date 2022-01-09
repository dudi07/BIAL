import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col border border-blue-100 shadow rounded-lg p-4 max-w-xl w-full mx-4 my-4 ">
        <div className=" bg-gray-200 h-48 w-full m-4 p-3"></div>

        <div className=" bg-gray-200 h-48 w-full m-4 p-3"></div>
        <div className=" bg-gray-200 h-48 w-full m-4 p-3"></div>
      </div>
    </div>
  );
};

export default Loader;
