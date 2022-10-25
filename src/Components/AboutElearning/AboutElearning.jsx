import Lottie from "lottie-react";
import React from "react";
import books from "./books.json";
import {
  MdOutlineComputer,
  MdOutlineLibraryBooks,
  MdOutlinePublic,
  MdArrowRightAlt,
} from "react-icons/md";
import { Link } from "react-router-dom";

const AboutElearning = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* about w learning text */}
        <div>
          <h2 className="text-xl font-semibold">
            About our E-Learning Platform <br />{" "}
            <span className="text-[#DA0B4E] text-5xl font-bold ml-4 leading-relaxed flex items-center">
              <MdArrowRightAlt /> Online Pathsala
            </span>
          </h2>
          <div className="mt-6">
            {/* first para */}
            <p className="flex items-center text-2xl font-semibold pb-3 text-slate-500">
              <span className="bg-[#f05d8e] p-2 rounded-full text-white mr-4">
                <MdOutlineComputer />
              </span>
              You can log in to your account on maximum 3 devices.
            </p>
            {/* second para */}
            <p className="flex items-center text-2xl font-semibold pb-3 text-slate-500">
              <span className="bg-[#f05d8e] p-2 rounded-full text-white mr-4">
                <MdOutlineLibraryBooks />
              </span>
              You can get all the top leading skills course in one platform
            </p>
            {/* third para */}
            <p className="flex items-center text-2xl font-semibold pb-3 text-slate-500">
              <span className="bg-[#f05d8e] p-2 rounded-full text-white mr-4">
                <MdOutlinePublic />
              </span>
              You can get any course from anywhere in the world
            </p>

            <div className="flex justify-start mt-4">
              <Link to="/courses">
                <button className="bg-[#DA0B4E] px-6 py-2 font-bold border-2 border-transparent hover:border-[#DA0B4E] text-white rounded hover:bg-white hover:text-[#DA0B4E]">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* about w learning text */}
        {/* lotti animation start */}
        <div>
          <Lottie className="md:w-[60%] mx-auto" animationData={books} />
        </div>
        {/* lotti animation start */}
      </div>
    </div>
  );
};

export default AboutElearning;
