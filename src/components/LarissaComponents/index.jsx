import React from "react";
import ReminderFrame from "./ReminderFrame";
import FooterButton from "./FooterButton";
import DateMenu from "../AllButtons/DateMenu";

const LarissaComponents = () => {
  const dataInfo = {item1: { id:1,
    title: "Revisão de candidaturas",
    date: "hoje às 11h30",},
    item2: {id:2,
      title:"Entrevista com candidatos ",
      date:"hoje às 10h30"
     },
    item3: {
      id:3,
      title: "Breve reunião com o designer de produtos do departamento de TI",
      date: "Today - 09.15 AM"
    },
    item4:{id:4, title: "Sort Front-end developer candidates",
      date: "Yesterday - 3.50pm"
    }
  };
  return (
    <div className="pt-[17px] pb-[9px] rounded-[12px] border-[rgb(224,224,224)] border-[1px] border-solid flex flex-col h-full">
      <div className="flex justify-between items-center mx-5 pb-[15px]">
        <h1 className="text-[#161E54] font-medium text-[15px] ">
          Próximas Atividades
        </h1>
        <DateMenu date={"Hoje, 13 de setembro de 2021"}/>
      </div>
      <div className="flex flex-col gap-2 lg:h-[84%]">
        <div className="px-5">
          <h2 className="text-xs text-[#686868] pb-2">Prioridade</h2>
          <ReminderFrame data={dataInfo.item1}/>
        </div>
        <div className="px-5 flex flex-col gap-2 lg:h-full">
          <h2 className="text-xs text-[#686868]">Outro</h2>
          <div className="flex flex-col gap-2 truncate h-full">
          <ReminderFrame data={dataInfo.item2} />
          <ReminderFrame data={dataInfo.item3}/>
          <ReminderFrame data={dataInfo.item4}/>
          </div>
        </div>
      </div>
      <FooterButton />
    </div>
  );
};

export default LarissaComponents;
