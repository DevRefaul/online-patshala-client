import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContexts";

const Header = () => {
  const authInfo = useContext(AuthContext);
  const { user, handleLogoutUser } = authInfo;

  return (
    <div className="bg-[#e1205de8]">
      <div className="w-[80%] mx-auto">
        <div className="navbar p-0">
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
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#DA0B4E",
                            background: "#fff",
                          }
                        : { color: "#fff", background: "" }
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#DA0B4E",
                            background: "#fff",
                          }
                        : { color: "#fff", background: "" }
                    }
                    to="/courses"
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#DA0B4E",
                            background: "#fff",
                          }
                        : { color: "#fff", background: "" }
                    }
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#DA0B4E",
                            background: "#fff",
                          }
                        : { color: "#fff", background: "" }
                    }
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <NavLink className="" to="/">
                <img
                  src="https://i.ibb.co/p0Zf0sm/MainLogo.png"
                  className="w-[200px] max-w-none lg:w-[70%] xl:w-[50%] 2xl:w-[40%]"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-white font-semibold">
              <li>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#DA0B4E",
                          background: "#fff",
                        }
                      : { color: "#fff", background: "" }
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#DA0B4E",
                          background: "#fff",
                        }
                      : { color: "#fff", background: "" }
                  }
                  to="/courses"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#DA0B4E",
                          background: "#fff",
                        }
                      : { color: "#fff", background: "" }
                  }
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#DA0B4E",
                          background: "#fff",
                        }
                      : { color: "#fff", background: "" }
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end hidden md:flex">
            {user ? (
              <>
                <div className="text-white font-bold">{user?.displayName}</div>
                {/* for profile */}
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      className="w-10 rounded-full border-2 border-white"
                      data-tip={user?.displayName}
                    >
                      <img
                        src={
                          user
                            ? user?.photoURL
                            : "https://i.ibb.co/9NC0frF/download.png"
                        }
                        alt=""
                        className=""
                        title={user?.displayName}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                  >
                    <li>
                      <NavLink to="/profile" className="justify-between">
                        Profile
                        <span className="badge bg-[#DA0B4E] border-0 font-semibold">
                          New
                        </span>
                      </NavLink>
                    </li>
                    <li className="mt-4" onClick={() => handleLogoutUser()}>
                      <Link className=" border-2 border-[#DA0B4E]">Logout</Link>
                    </li>
                  </ul>
                </div>
                {/* for profile */}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="bg-white text-[#d71553] border-2 border-purple-00 font-semibold px-4 py-1 hover:border-2 hover:border-white hover:bg-[#DA0B4E] hover:text-white  rounded-md"
                >
                  Sign in
                </NavLink>
                {/* sign in btn */}
              </>
            )}
            <label className="swap swap-rotate ml-3">
              <input type="checkbox" className="text-white" />

              <svg
                className="swap-on fill-current w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className="swap-off fill-current w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
