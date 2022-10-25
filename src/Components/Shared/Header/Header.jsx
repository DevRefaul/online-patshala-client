import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#dc255fe8]">
      <div className="w-[80%] mx-auto">
        <div className="navbar py-1">
          <div className="navbar-start">
            <div className="dropdown">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <Link className="">
                <img
                  src={require("../../../Assets/MainLogo.png")}
                  className="w-[200px] max-w-none lg:w-[50%] xl:w-[30%]"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-white font-semibold">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden md:flex">
            {/* for profile */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge bg-[#DA0B4E] border-0 font-semibold">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
            {/* for profile */}

            {/* sign in btn */}
            <Link
              to="/login"
              className="bg-white text-[#DA0B4E] border-2 border-purple-00 font-semibold px-4 py-1 hover:border-2 hover:border-white hover:bg-[#DA0B4E] hover:text-white  rounded-md"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
