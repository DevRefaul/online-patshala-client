import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import teaching from "./teaching.json";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-[80%] mx-auto py-8">
      <div>
        <p className="text-base md:text-lg font-semibold">Welcome to the</p>
        <h2 className="text-3xl xl:text-6xl font-bold text-[#DA0B4E] pb-4">
          Online Patshala
        </h2>
        <p className="text-lg font-semibold lg:w-[70%]">
          A leading online learning platform. Giving you the best courses and
          tutors around the world. With a ton of courses that will enrich your
          learning and give you the best support even after the course ends.
        </p>
        <Link to="/courses" className="">
          <button className="bg-[#DA0B4E] text-white font-semibold w-40 px-2 py-1 border-2 border-transparent rounded mt-4 flex justify-between items-center hover:text-[#DA0B4E] hover:bg-white hover:border-[#DA0B4E]">
            Enroll now{" "}
            <span>
              <MdOutlineArrowRightAlt className="text-2xl w-8 ml-3 h-full bg-white text-[#DA0B4E] rounded-sm border-2 border-[#DA0B4E]" />
            </span>
          </button>
        </Link>
      </div>

      <div>
        <Lottie animationData={teaching} />
      </div>
    </div>
  );
};

export default Hero;
