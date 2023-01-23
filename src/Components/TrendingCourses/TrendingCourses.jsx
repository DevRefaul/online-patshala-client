import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";

const TrendingCourses = ({ courses }) => {
  return (
    <div className="bg-slate-50 py-10">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* course text */}
        <div className="text-center">
          <p>
            <small className="font-semibold">New & Trending</small>
          </p>
          <h3 className="text-3xl font-semibold">
            <span className="text-[#d71553]">Featured Courses</span> By Our
            Professional <br /> Instructors
          </h3>
        </div>

        {/* course overview */}
        <div className="my-12">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* browse course button */}

          <div className="flex justify-center mt-5">
            <Link to="/courses">
              <button className="bg-[#DA0B4E] text-white px-4 py-2 font-semibold rounded border-2 border-transparent hover:bg-[white] hover:text-[#d71553] hover:border-[#DA0B4E]">
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
