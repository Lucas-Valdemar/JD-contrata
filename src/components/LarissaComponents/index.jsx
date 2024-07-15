import React from "react";
import style from "./style.module.css";
import ReminderFrame from "./ReminderFrame";
import Reminder from "../AnnounAndReminders/Reminder";
import FooterButton from "../AnnounAndReminders/FooterButton";

const LarissaComponents = () => {
  return (
    <div className="pt-[17px] pb-[9px] rounded-[12px] border-[rgb(224,224,224)] border-[1px] border-solid flex flex-col">
      <div className="flex justify-between items-center mx-5 pb-[15px]">
        <h1 className="text-[#161E54] font-medium text-[15px]">
          Próximas Atividades
        </h1>
        <div className="text-[#686868] text-[10px] border-[#EFEFEF] border-[1px] border-solid rounded-[4px] h-[27px]">
          Hoje, 13 de Setem...
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-[9px]">
        <div>
          <h2 className="px-5">Prioridade</h2>
          <Reminder />
        </div>
        <div className="px-5">
          <h2>Outro</h2>
          <h1 className={style.exemplo}>Larissa</h1>
          <ReminderFrame />
          <ReminderFrame />
        </div>
      </div>
      <FooterButton />
    </div>
  );
};

export default LarissaComponents;
