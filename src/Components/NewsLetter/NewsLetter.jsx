import React from "react";

const NewsLetter = () => {
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

      {/* input section */}
      <form className="w-[90%] md:w-[60%] xl:w-[30%] mx-auto  relative mt-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="py-3 px-2 w-full rounded outline-none"
        />
        <button className="absolute top-1 right-1 bg-[#DA0B4E] text-white px-4 py-2 z-10 rounded font-medium">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
