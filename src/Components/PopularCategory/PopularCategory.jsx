import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { Link } from "react-router-dom";
import "./popularcategory.css";
import { Link } from "react-router-dom";

const PopularCategory = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[95%] md:w-[80%] mx-auto">
        {/* course text */}
        <div className="text-center">
          <p>
            <small className="font-semibold text-lg">Popular Skills</small>
          </p>
          <h3 className="text-3xl font-semibold">
            <span className="text-[#DA0B4E]">Hot & Popular</span> Skills to
            Learn
          </h3>
        </div>

        {/* popular category */}
        <div className="my-6">
          {/* slider section */}
          <div>
            {/* slider start */}
            <Splide
              className="slider"
              aria-label="My Favorite Images"
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                autoplay: true,
                breakpoints: { 640: { perPage: 1 }, 1024: { perPage: 2 } },
              }}
            >
              <SplideSlide>
                <div className=" p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/ai.jpg")}
                    alt="Artificial intelligence img"
                  />
                  <p className="font-bold">Artificial Intelligence</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/appdev.jpg")}
                    alt="App developmnet img"
                  />
                  <p className="font-bold">App Development</p>
                </div>
              </SplideSlide>
              {/* third slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/digitalmarketing.jpg")}
                    alt="digitalmarketing img"
                  />
                  <p className="font-bold">Digital Marketing</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/insta.jpg")}
                    alt="insta marketing img"
                  />
                  <p className="font-bold">Instagram Marketing</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/learnenglish.jpg")}
                    alt="English learning img"
                  />
                  <p className="font-bold">Learning English</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/linkedin.jpg")}
                    alt="Linkedin img"
                  />
                  <p className="font-bold">Linkedin Marketing</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/projectmanagement.jpg")}
                    alt="projectmanagement img"
                  />
                  <p className="font-bold">Project Management</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img src={require("../../Assets/seo.jpg")} alt="Seo img" />
                  <p className="font-bold">Search Engine Optimization</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1 bg-[#DA0B4E] text-white">
                  <img src={require("../../Assets/uiux.jpg")} alt="UI/UX img" />
                  <p className="font-bold">UI/UX Design</p>
                </div>
              </SplideSlide>
              {/* second slide */}
              <SplideSlide>
                <div className="p-2 rounded-md md:p-4 mx-1  bg-[#DA0B4E] text-white">
                  <img
                    src={require("../../Assets/webdev.jpg")}
                    alt="Web development img"
                  />
                  <p className="font-bold">Web Development</p>
                </div>
              </SplideSlide>
            </Splide>
            {/* slider end*/}
          </div>
          {/* enroll btn */}
          <div className="flex justify-center mt-4">
            <Link to="/courses">
              <button className="bg-[#DA0B4E] px-6 py-2 font-bold border-2 border-transparent hover:border-[#DA0B4E] text-white rounded hover:bg-white hover:text-[#DA0B4E]">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;

/* 
         browse course button

          <div className="flex justify-center mt-5">
            <Link to="/courses">
              <button className="bg-[#DA0B4E] text-white px-4 py-2 font-semibold rounded border-2 border-transparent hover:bg-[white] hover:text-[#DA0B4E] hover:border-[#DA0B4E]">
                Browse All Courses
              </button>
            </Link>
          </div>
*/
