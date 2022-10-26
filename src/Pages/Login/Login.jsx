import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContexts";

const Login = () => {
  const authInfo = useContext(AuthContext);
  const {
    handleFacebookSignIn,
    handleGithubSignIn,
    handleGoogleSignIn,
    handleLoginUser,
    handlePasswordReset,
  } = authInfo;

  // email state
  const [email, setEmail] = useState();

  // navigation
  const navigate = useNavigate();

  // getting location
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // google sign in
  const googleSignin = () => {
    handleGoogleSignIn()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  // facebook sign in
  const facebookSignin = () => {
    handleFacebookSignIn()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
  // github sign in
  const githubSignin = () => {
    handleGithubSignIn()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  // gmail pass login
  const userLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    handleLoginUser(email, password)
      .then(() => {
        toast.success("Logged in successfully");
          navigate(from, { replace: true });
          
      })
      .catch((err) => toast.error(err.message));
  };

  // password reset auth
  const handlePassReset = () => {
    handlePasswordReset(email)
      .then(() =>
        toast.success(
          "Password reset mail sent to your Email. If not found check the spam folder."
        )
      )
      .catch((err) => toast.error(err.message));
  };

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
            onClick={googleSignin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:ring-violet-400"
          >
            <FaGoogle></FaGoogle>
            <p>Continue with Google</p>
          </button>
          <button
            onClick={githubSignin}
            aria-label="Login with GitHub"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-800 focus:ring-violet-400"
          >
            <FaGithub />
            <p>Continue with GitHub</p>
          </button>
          <button
            onClick={facebookSignin}
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
          onSubmit={userLogin}
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
                onBlur={(e) => setEmail(e.target.value)}
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
                  onClick={handlePassReset}
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
            type="submit"
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
