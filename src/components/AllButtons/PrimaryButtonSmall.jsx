import React from "react";

const PrimaryButtonSmall = ({ buttonName }) => {
  return (
    <>
      <a href="">
        <div className=" bg-[#FF5151] rounded-[4px] w-fit px-[20px] py-[10px] lg:w-[8.5rem] px-[16px]">
          <p className="font-medium text-sm text-white w-[107px] text-center">
            {buttonName}
          </p>
        </div>
      </a>
    </>
  );
};

export default PrimaryButtonSmall;
