import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../Components/Shared/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="">
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-4 grid-cols-1 lg:grid-cols-[1fr_3fr] my-10 ">
        {/* mpbile and tab course navigation start */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <span className="ml-4">Courses</span>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 md:w-72"
          >
            <div className="border-2 border-[#DA0B4E] h-fit px-2 py-4 rounded-md">
              <h4 className="text-3xl font-semibold border-b-[3px]  pb-4">
                Our Courses
              </h4>
              <div>
                <ul>
                  <Link to="/courses">
                    <li className="font-medium text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#DA0B4E]">
                      All Courses
                    </li>
                  </Link>
                  {courses.map((course) => (
                    <Link to={`courses/${course.id}`} key={course.id}>
                      <li className="font-medium text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#DA0B4E]">
                        {course.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </ul>
        </div>
        {/* mpbile and tab course navigation start */}

        {/* course nav start*/}
        <div className="hidden lg:block border-2 border-[#DA0B4E] h-fit px-2 py-4 rounded-md">
          <div>
            <h4 className="text-3xl font-semibold border-b-[3px]  pb-4">
              Our Courses
            </h4>
            <div>
              <ul>
                <Link to="/courses">
                  <li className="font-medium text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#DA0B4E]">
                    All Courses
                  </li>
                </Link>
                {courses.map((course) => (
                  <Link to={`courses/${course.id}`} key={course.id}>
                    <li className="font-medium text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#DA0B4E]">
                      {course.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* course nav end */}

        {/* course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6">
          {courses.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
