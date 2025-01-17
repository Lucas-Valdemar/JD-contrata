import React from "react";
import menuIcon from "./assets/menuIcon.svg";
import reminderIcon from "./assets/reminderIcon.svg";

const Reminder = ( {data}) => {
  
  return (
    <div className="bg-[#fafafa] rounded-[6px] border-[0.5px] border-solid border-[#E0E0E0] px-[14px] flex flex-col gap-[5px] pt-2 pb-[6px] mx-5">
      <h3 className="text-sm text-[#303030] lg:w-[77.5%] line-clamp-2">{data.title}</h3>
      <div className="flex justify-between items-center">
        <p className="font-roboto text-[#686868] text-[10px]">
          {data.date}
        </p>
        <div className="flex gap-[10px] items-center ">
          <img
            src={reminderIcon}
            className="w-[16px] h-[16px]"
            alt="reminderIcon"
          />
          <img src={menuIcon} alt="menuIcon" />
        </div>
      </div>
    </div>
  );
};

export default Reminder;
