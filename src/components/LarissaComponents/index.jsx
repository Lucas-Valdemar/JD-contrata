import React from "react";
import ReminderFrame from "./ReminderFrame";
import FooterButton from "./FooterButton";

const LarissaComponents = () => {
  return (
    <div className="pt-[17px] pb-[9px] rounded-[12px] border-[rgb(224,224,224)] border-[1px] border-solid flex flex-col">
      <div className="flex justify-between items-center mx-5 pb-[15px]">
        <h1 className="text-[#161E54] font-medium text-[15px] ">
          Próximas Atividades
        </h1>
        <div className="text-[#686868] text-[10px] border-[#EFEFEF] border-[1px] border-solid rounded-[4px] h-[27px]">
          Hoje, 13 de Setem...
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[9px] ">
        <div className="px-5">
          <h2 className="text-xs text-[#686868] pb-2">Prioridade</h2>
          <ReminderFrame />
        </div>
        <div className="px-5 flex flex-col gap-2 mb-7">
          <h2 className="text-xs text-[#686868]">Outro</h2>
          <ReminderFrame />
          <ReminderFrame />
        </div>
      </div>
      <FooterButton />
    </div>
  );
};

export default LarissaComponents;
