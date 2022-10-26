import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../Components/Shared/CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="">
      {/* course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-6">
        {courses?.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
