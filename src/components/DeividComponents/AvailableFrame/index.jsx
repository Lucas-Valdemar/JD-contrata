import React from "react";


const AvailableFrame = ({dataInfo}) => {
const bgVariants ={
  orange: "bg-[#FFEFE7] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-2 px-5 pt-4 lg:h-[8.5rem] min-w-[30%] ",
  blue: "bg-[#E8F0FB] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-2 px-5 pt-4 lg:h-[8.5rem] min-w-[30%] ",
  pink: "bg-[#FDEBF9] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-2 px-5 pt-4 lg:h-[8.5rem] min-w-[30%] "
}

const textVariants = {
  textOrange: "text-[#FF5151] font-medium text-base truncate",
  textBlue: "text-[#3786F1] font-medium text-base truncate",
  textPink: "text-[#EE61CF] font-medium text-base truncate"
}
 

  

  return (
  <div className={`${bgVariants[dataInfo.bgColor]}`}>
    <div className="font-medium text-[#161E54] text-lg truncate">{dataInfo.title}</div>
    <div className="font-medium text-[#161E54] text-4xl">{dataInfo.number}</div>
    <div className={`${textVariants[dataInfo.textColor]}`} >{`${dataInfo.extraNumber}  ${dataInfo.extra}`}</div>
  </div>
  )
};

export default AvailableFrame;
