
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import error from "../assets/eeeeerrr.png";

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[80%] mx-auto text-center">
      <Link  onClick={navigate(-1)}>
        <button className="bg-blue-300 font-bold text-white rounded py-3 px-4 mx-auto">
          Back to Before
        </button>
      </Link>
      <img className="w-[100%] mx-auto" src={error} alt="error img" />
    </div>
  );
};

export default ErrorPage;
