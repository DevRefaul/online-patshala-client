import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContexts";

const Header = () => {
  const authInfo = useContext(AuthContext);
  const { user, handleLogoutUser } = authInfo;

  return (
    <div className="bg-[#dc255fe8]">
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
                    <div className="w-10 rounded-full border-2 border-white">
                      <img src={user?.photoURL} alt="" />
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
                  className="bg-white text-[#DA0B4E] border-2 border-purple-00 font-semibold px-4 py-1 hover:border-2 hover:border-white hover:bg-[#DA0B4E] hover:text-white  rounded-md"
                >
                  Sign in
                </NavLink>
                {/* sign in btn */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
