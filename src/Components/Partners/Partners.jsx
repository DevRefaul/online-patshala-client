import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Partners = () => {
  return (
    <div className="py-20">
      <div>
        <h2 className="text-center  text-3xl font-semibold">
          <span className="text-[#DA0B4E]">Trusted</span> by the Professionals
          <br />
          World wide
        </h2>
      </div>

      {/* slider of partners */}
      <div className="w-[80%] mx-auto mt-8">
        <Splide
          aria-label="Partners Images"
          options={{
            type: "loop",
            perPage: 5,
            autoplay: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              640: { perPage: 1 },
              920: { perPage: 2 },
              1020: { perPage: 3 },
              1440: { perPage: 4 },
            },
          }}
        >
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/google.png")} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/amazon.png")} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/lenovo.png")} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/airbnb.png")} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/slack.png")} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../../Assets/PartnersImg/paypal.png")} alt="" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Partners;
