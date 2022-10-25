import React from "react";
import AboutElearning from "../../Components/AboutElearning/AboutElearning";
import Hero from "../../Components/Hero/Hero";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Partners from "../../Components/Partners/Partners";
import PopularCategory from "../../Components/PopularCategory/PopularCategory";
import ReviewSlider from "../../Components/Review/ReviewSlider";
import TrendingCourses from "../../Components/TrendingCourses/TrendingCourses";
// import toast from "react-hot-toast";

const Home = () => {
  //   const notify = () => toast.success("Here is your toast");

  return (
    <>
      <Hero />
      <TrendingCourses />
      <PopularCategory />
      <AboutElearning />
      <ReviewSlider />
      <Partners />
      <NewsLetter />
    </>
  );
};

export default Home;
