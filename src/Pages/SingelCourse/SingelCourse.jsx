import React from "react";
import { useLoaderData } from "react-router-dom";
const SingelCourse = () => {
  const courseInfo = useLoaderData();
  console.log(courseInfo);
  return (
    <div>
      <div className="w-[90%] md:w-[80%] mx-auto"></div>
      <h2>This is singel course sec{courseInfo.name}</h2>
    </div>
  );
};

export default SingelCourse;
