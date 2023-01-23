import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();

  const course = useLoaderData();
  const { name, price, courseImage } = course;

  const handleBuyBtn = () => {
    toast.success(`${name} Course Successfully Accessed `);
    navigate("/home");
  };

  return (
    <div>
      <div className="w-[90%] md:w-[80%] mx-auto min-h-screen justify-center flex items-center">
        <div className="border-2 border-[#DA0B4E] lg:flex justify-between rounded-md">
          <div className=" lg:flex  p-3">
            {/* course image */}
            <img
              src={courseImage}
              alt=""
              className="lg:h-[150px] w-full lg:w-auto"
            />

            {/* course details */}
            <div>
              <h2 className="text-3xl font-bold ml-6 pt-4">
                Course Name : {name}
              </h2>
              <h2 className="text-2xl font-bold ml-6 pt-4 flex items-center">
                Price : <span className=" text-4xl">{price}</span>$
              </h2>
            </div>
          </div>

          {/* buying button */}
          <div className="flex justify-center items-center px-8 my-4">
            <button
              onClick={handleBuyBtn}
              className="bg-white text-[#d71553] rounded-md border-2 border-[#DA0B4E] px-6 py-2 hover:bg-[#DA0B4E] hover:text-white "
            >
              Buy Premium Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
