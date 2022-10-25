import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Review.css";

const ReviewSlider = () => {
  return (
    <div className="py-28 reviewSection">
      <h4 className="text-2xl font-semibold text-center mb-16">
        Take a look at our Students Review around the World
      </h4>

      <Splide
        aria-label="My Favorite Images"
        options={{ type: "loop", autoplay: true }}
        className="bg-transparent"
      >
        <SplideSlide>
          <div>
            {/* review image */}
            <div className="flex justify-center items-center  ">
              <img
                src={require("../../Assets/Reviewer/user-1.jpg")}
                alt=""
                className="rounded-full w-20"
              />
            </div>
            {/* review text */}
            <div className="mt-4 text-center ">
              <h4 className="text-xl font-bold">Tom Cruise</h4>
              <p className="font-semibold my-3">Web Developer</p>
              <p className="lg:w-[40%] mx-auto">
                "This is one of the best learning platform in the whole world. I
                had enrolled a course of Web Developerv . The instructor was top
                notch and so much intelligent. He had a lot of skill about Web
                Developer . He helped us in many ways whenever we need help
                about Web Developer."
              </p>
            </div>
            {/* content end */}
          </div>
        </SplideSlide>

        {/* second slider */}
        <SplideSlide>
          <div>
            {/* review image */}
            <div className="flex justify-center items-center ">
              <img
                src={require("../../Assets/Reviewer/user-2.jpg")}
                alt=""
                className="rounded-full w-20"
              />
            </div>
            {/* review text */}
            <div className="mt-4 text-center">
              <h4 className=" text-xl font-semibold">Shakira</h4>
              <p className="font-semibold my-3">Digital Marketing</p>
              <p className="lg:w-[40%] mx-auto">
                "This is one of the best learning platform in the whole world. I
                had enrolled a course of Digital Marketing . The instructor was
                top notch and so much intelligent. He had a lot of skill about
                Digital Marketing . He helped us in many ways whenever we need
                help about Digital Marketing."
              </p>
            </div>
            {/* content end */}
          </div>
        </SplideSlide>

        {/* third slider */}
        <SplideSlide>
          <div>
            {/* review image */}
            <div className="flex justify-center items-center ">
              <img
                src={require("../../Assets/Reviewer/user-3.jpg")}
                alt=""
                className="rounded-full w-20"
              />
            </div>
            {/* review text */}
            <div className="mt-4 text-center">
              <h4 className=" text-xl font-semibold">Peter Parker</h4>
              <p className="font-semibold my-3">SEO Expert</p>
              <p className="lg:w-[40%] mx-auto">
                "This is one of the best learning platform in the whole world. I
                had enrolled a course of SEO . The instructor was top notch and
                so much intelligent. He had a lot of skill about SEO . He helped
                us in many ways whenever we need help about SEO."
              </p>
            </div>
            {/* content end */}
          </div>
        </SplideSlide>

        {/* fourthslider */}
        <SplideSlide>
          <div>
            {/* review image */}
            <div className="flex justify-center items-center ">
              <img
                src={require("../../Assets/Reviewer/user-4.jpg")}
                alt=""
                className="rounded-full w-20"
              />
            </div>
            {/* review text */}
            <div className="mt-4 text-center">
              <h4 className=" text-xl font-semibold">Pepper</h4>
              <p className="font-semibold my-3">UI/UX Designer</p>
              <p className="lg:w-[40%] mx-auto">
                "This is one of the best learning platform in the whole world. I
                had enrolled a course of UI/UX Designing . The instructor was
                top notch and so much intelligent. He had a lot of skill about
                UI/UX Designing. He helped us in many ways whenever we need help
                about UI/UX Designing."
              </p>
            </div>
            {/* content end */}
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default ReviewSlider;
