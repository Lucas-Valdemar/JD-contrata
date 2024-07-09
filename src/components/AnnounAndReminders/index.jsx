import React from "react";
import Reminder from "./Reminder";
import FooterButton from "./FooterButton";

const AnnounAndReminders = () => {
  return (
    <div className="pt-[17px] pb-[9px] rounded-[12px] border-[rgb(224,224,224)] border-[1px] border-solid flex flex-col">
      <div className="flex justify-between items-center mx-5 pb-[15px]">
        <h1 className="text-[#161E54] font-medium text-[1.5rem]">Anúncio</h1>
        <div className="text-[#686868] text-[10px] border-[#EFEFEF] border-[1px] border-solid rounded-[4px] h-[27px]">
          Hoje, 13 de Setem...
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[9px]">
        <Reminder />
        <Reminder />
        <Reminder />
      </div>
      <FooterButton />
    </div>
  );
};

export default AnnounAndReminders;
