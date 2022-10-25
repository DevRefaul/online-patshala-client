import React from "react";
import { MdDetails } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  console.log(course);
  const {
    id,
    name,
    tutor,
    tutorImage,
    courseImage,
    toalVideos,
    price,
    details,
  } = course;
  return (
    <div>
      <div className="card card-compact h-full w-full bg-base-100 shadow-xl p-0 rounded-md">
        <figure>
          <img
            className="md:h-52 lg:h-44 xl:h-60 2xl:h-72 w-full object-cover"
            src={courseImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-0">
          <Link>
            <h2 className="card-title hover:text-[#DA0B4E]">{name}</h2>
          </Link>
          <p className="text-base font-medium">{details.slice(0, 100)}...</p>
          <p className="text-lg font-medium">Total Videos: {toalVideos}</p>
          <h2 className="text-lg font-medium">
            Course Fee :{" "}
            <span className="text-xl font-bold text-[#DA0B4E]">{price}</span>$
          </h2>
          <div className="card-actions justify-between items-center border-t-2 border-slate-200 pt-2">
            <div className="flex justify-start items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={tutorImage}
                alt="tutor img"
              />
              <p className="font-semibold ml-3">{tutor}</p>
            </div>
            <Link to={`/courses/${id}`}>
              <button className="bg-[#DA0B4E] px-4 py-2 rounded border-2 border-transparent text-white font-bold hover:bg-white hover:text-[#DA0B4E] hover:border-[#DA0B4E]">
                See Details
              </button>
            </Link>
            {/* btn end */}
          </div>
          {/* card actions end */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
