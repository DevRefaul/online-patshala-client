import React from "react";
import { Link, NavLink } from "react-router-dom";

const CourseNav = ({ courses }) => {
  return (
    <>
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
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72"
        >
          <div className="border-2 border-[#DA0B4E] h-fit px-2 py-4 rounded-md">
            <h4 className="text-3xl font-semibold border-b-[3px]  pb-4">
              Our Courses
            </h4>
            <div>
              <ul className="">
                <NavLink to="/courses">
                  <li className="font-medium px-2 text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#d71553]">
                    All Courses
                  </li>
                </NavLink>
                <div className="navbar grid grid-cols-1 p-0">
                  {courses?.map((course) => (
                    <NavLink
                      to={`/courses/${course?.id}`}
                      key={course?.id}
                      className={({ isActive }) =>
                        isActive ? "bg-[#DA0B4E] text-white" : ""
                      }
                    >
                      <li className="font-medium px-2 text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3">
                        {course.name}
                      </li>
                    </NavLink>
                  ))}
                </div>
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
            <ul className="navbar grid grid-cols-1">
              <Link to="/courses">
                <li className="font-medium px-2 text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 hover:text-[#d71553]">
                  All Courses
                </li>
              </Link>

              {courses.map((course) => (
                <NavLink
                  to={`/courses/${course.id}`}
                  key={course.id}
                  className={({ isActive }) =>
                    isActive ? "bg-[#DA0B4E] text-white rounded-sm" : ""
                  }
                >
                  <li className="font-medium px-2 rounded-sm text-lg hover:border-b-[1px] hover:border-[#DA0B4E] py-3 ">
                    {course.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* course nav end */}
    </>
  );
};

export default CourseNav;
