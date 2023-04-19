import React from "react";
import loaderImg from "../assets/square-loader.gif";

const Loader = () => {
  return (
    <div className="w- mx-auto">
      <img
        className="h-[200px] w-[200px] mx-auto bg-transparent"
        src={loaderImg}
        alt=""
      />
      <h2 className="mb-5">Loading Blogs ......</h2>
    </div>
  );
};

export default Loader;
