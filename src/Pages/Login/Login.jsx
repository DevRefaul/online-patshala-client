import React from "react";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-20 px-2">
      <div className="w-full max-w-md p-4 rounded-md sm:p-8 dark:text-gray-700 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 to-gray-200 shadow-xl">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-800">
          Dont have account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-[#DF396D] font-semibold"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:ring-violet-400"
          >
            <FaGoogle></FaGoogle>
            <p>Continue with Google</p>
          </button>
          <button
            aria-label="Login with GitHub"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:ring-violet-400"
          >
            <FaGithub />
            <p>Continue with GitHub</p>
          </button>
          <button
            aria-label="Login with Twitter"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:ring-violet-400"
          >
            <FaFacebook />
            <p>Continue with Facebook</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-white" />
          <p className="px-3 dark:text-gray-800 font-bold">OR</p>
          <hr className="w-full dark:text-white" />
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourmail@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  className="text-xs hover:underline dark:text-gray-800"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#DF396D] dark:text-white hover:bg-white hover:text-[#DF396D] border-2 hover:border-[#DF396D]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
