import React from "react";
import CourseNav from "./CourseNav";
import { Outlet, useLoaderData } from "react-router-dom";

const MainCoursePage = () => {
  const courses = useLoaderData();

  return (
    <div>
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-4 grid-cols-1 lg:grid-cols-[1fr_3fr] my-10 ">
        <CourseNav courses={courses} />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainCoursePage;
