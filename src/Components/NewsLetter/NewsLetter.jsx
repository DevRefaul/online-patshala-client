import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/Auth/AuthContexts";

const NewsLetter = () => {
  const authInfo = useContext(AuthContext);
  const { user } = authInfo;

  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    form.reset();
    toast.success(`Hurray ${email} have subscribed to our Newsletter`);
  };

  return (
    <div className="bg-[#DA0B4E] py-20">
      <div className="w-[80%] mx-auto">
        <h2 className="text-white text-3xl font-semibold text-center">
          Subscribe to our Newsletter !
        </h2>

        <p className="text-center text-white font-medium">
          for exiting offers and discounts
        </p>
      </div>

      {user && user.email ? (
        <>
          {/* input section */}
          <form
            onSubmit={handleSubscribe}
            className="w-[98%] md:w-[60%] xl:w-[30%] mx-auto  relative mt-6"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="py-3 px-2 w-full rounded outline-none"
            />
            <button
              type="submit"
              className="absolute top-1 right-1 bg-[#DA0B4E] text-white px-4 py-2 z-10 rounded font-medium"
            >
              Subscribe
            </button>
          </form>
        </>
      ) : (
        <h2 className="text-3xl font-bold text-white text-center mt-6">
          Please Login to Subscribe
        </h2>
      )}
    </div>
  );
};

export default NewsLetter;
