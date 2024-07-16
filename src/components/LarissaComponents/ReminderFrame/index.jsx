import React from "react";
import menuIcon from "./assets/menuIcon.svg";


const ReminderFrame = ({data}) => {
  
  return (
    <div className="bg-[#fafafa] rounded-[6px] border-[0.5px] border-solid border-[#E0E0E0] px-[14px] flex flex-col gap-[5px] pt-2 pb-[6px] ">
      <h3 className="text-sm text-[#303030] lg:w-[73%] line-clamp-2">{data.title}</h3>
      <div className="flex justify-between items-center">
        <p className="font-roboto text-[#686868] text-[10px]">
          {data.date}
        </p>
        <img src={menuIcon} alt="menuIcon" />
      </div>
    </div>
  )
};

export default ReminderFrame;
