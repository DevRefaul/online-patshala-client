import React from "react";
import { MdPlayCircleOutline, MdLockOutline } from "react-icons/md";

const MilestoneCollapseCard = ({ milestone }) => {
  const { name, modules } = milestone;
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-[#DA0B4E] bg-base-100 rounded-md my-3"
      >
        <div>
          <div className="collapse-title text-xl font-medium flex items-center justify-between">
            {name} <MdLockOutline className="" />
          </div>
          <div className="collapse-content">
            {modules.map((module, idx) => (
              <li
                key={idx}
                className="list-none rounded py-2 flex flex-wrap items-center justify-start font-semibold hover:bg-[#DA0B4E] hover:text-white px-2"
              >
                <MdPlayCircleOutline className="mr-3 w-5 h-5" /> {module.name}
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MilestoneCollapseCard;
