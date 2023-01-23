import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import cat from "./error.json";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, statusText } = error;

  return (
    <div className="flex justify-center items-center min-h-screen text-center bg-slate-100">
      <div>
        <Lottie animationData={cat} className="w-[50%] mx-auto" />
        <h2 className="text-4xl font-extrabold text-red-600">{status}</h2>
        <p className="my-3 text-xl font-semibold">{statusText}</p>
        <p className="font-medium">An unknown error occured</p>
        <Link to="/">
          <button className="bg-[#DA0B4E] px-6 py-2 text-white rounded-md mt-8 font-semibold hover:bg-[#FBE6ED] hover:text-[#d71553] shadow-lg">
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
