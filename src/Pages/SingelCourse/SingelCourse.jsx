import React from "react";
import { MdPictureAsPdf, MdEco, MdStarBorderPurple500 } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import MilestoneCollapseCard from "./MilestoneCollapseCard";
const SingelCourse = () => {
  const courseInfo = useLoaderData();
  const {
    id,
    courseImage,
    details,
    milestones,
    name,
    price,
    ratings,
    toalVideos,
    totalMilestone,
    totalStudents,
    tutor,
    tutorImage,
  } = courseInfo;
  return (
    <div>
      <div className="w-[95%] mx-auto border-[1px] border-[#DA0B4E] rounded-md">
        {/* course heading start */}
        <div className="border-b-[1px] border-[#DA0B4E] py-2 mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold ml-2">Course Title: {name}</h2>
          <span>
            <MdPictureAsPdf className="text-4xl mr-2" />
          </span>
        </div>
        {/* course heading end */}

        {/* course body start */}
        <div className="p-4">
          {/* course img */}
          <>
            <img src={courseImage} alt="" className="w-full" />
          </>
          {/* course img */}
          {/* course overview / details */}
          <div>
            <h6 className="flex items-center text-xl font-semibold mb-2">
              <span>
                <MdEco className="text-xl text-lime-600" />
              </span>{" "}
              Course Overview:
            </h6>
            <p className="font-medium">{details}</p>
          </div>
          {/* course overview / details */}
          {/* course tutor */}
          <div className="mt-2">
            <h6 className="flex items-center text-xl font-semibold mb-2">
              <span>
                <MdEco className="text-xl text-lime-600" />
              </span>{" "}
              Instructor Details:
            </h6>
            <img src={tutorImage} alt="" className="w-20 rounded-lg" />
            <p className="font-semibold text-xl mt-2">{tutor}</p>
          </div>
          {/* course tutor */}
          {/* ratings ans students */}
          <div className="mt-4">
            <h6 className="flex items-center text-xl font-semibold mb-2">
              <span>
                <MdEco className="text-xl text-lime-600" />
              </span>{" "}
              Ratings and Total Students:
            </h6>
            <p className="flex items-center text-lg">
              Ratings : <span className="font-bold ml-2">{ratings}</span>{" "}
              <MdStarBorderPurple500 className="text-[#DA0B4E] font-bold" />
            </p>
            <p className="flex items-center text-lg">
              Total Students :{" "}
              <span className="font-bold ml-2">{totalStudents}</span>
            </p>
          </div>
          {/* ratings ans students */}
          {/* milestones */}
          <div className="mt-6">
            <h6 className="flex items-center text-xl font-semibold mb-2">
              <span>
                <MdEco className="text-xl text-lime-600" />
              </span>{" "}
              Milestones:
            </h6>
            <p className="flex items-center text-lg">
              Total Milestones :{" "}
              <span className="font-bold ml-2">{totalMilestone}</span>
            </p>
            <p className="text-lg ">
              Total Videos : <span className="font-semibold">{toalVideos}</span>
            </p>
            {/* milestone overview */}
            <p className="text-lg font-semibold mt-4">Milestone Overview:</p>
            {milestones.map((milestone, idx) => (
              <MilestoneCollapseCard key={idx} milestone={milestone} />
            ))}
            {/* milestone overview */}
          </div>
          {/* milestones */}

          {/* price section */}
          <div className="mt-6">
            <h6 className="flex items-center text-xl font-semibold mb-2">
              <span>
                <MdEco className="text-xl text-lime-600" />
              </span>{" "}
              Price:{" "}
              <span className="text-[#DA0B4E] text-3xl ml-2">{price}</span>$
            </h6>
          </div>

          {/* enroll btn */}
          <div className="mt-3">
            <Link to={`/checkout/${id}`}>
              <button className="border-2 border-[#DA0B4E] px-4 py-2 text-[#DA0B4E] rounded-md font-semibold hover:text-white hover:bg-[#DA0B4E] ">
                Get Premium Access
              </button>
            </Link>
          </div>
          {/* enroll btn */}
          {/* price section */}
        </div>
        {/* course body end */}
      </div>
    </div>
  );
};

export default SingelCourse;
