import React from "react";
import { Link } from "react-router-dom";

const TrendingCourses = () => {
  return (
    <div className="bg-slate-50 py-10">
      <div className=" w-[80%] mx-auto">
        {/* course text */}
        <div className="text-center">
          <p>
            <small className="font-semibold">New & Trending</small>
          </p>
          <h3 className="text-3xl font-semibold">
            <span className="text-[#DA0B4E]">Featured Courses</span> By Our
            Professional <br /> Instructors
          </h3>
        </div>

        {/* course overview */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>

          {/* browse course button */}

          <div className="flex justify-center mt-5">
            <Link to="/courses">
              <button className="bg-[#DA0B4E] text-white px-4 py-2 font-semibold rounded border-2 border-transparent hover:bg-[white] hover:text-[#DA0B4E] hover:border-[#DA0B4E]">
                Browse All Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
