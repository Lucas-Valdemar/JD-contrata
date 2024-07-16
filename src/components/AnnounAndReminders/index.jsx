import React from "react";
import Reminder from "./Reminder";
import FooterButton from "./FooterButton";
import DateMenu from "../AllButtons/DateMenu";


const AnnounAndReminders = () => {
  const dataInfo = { item1: { id: 1,
    title: "Cronograma de passeios para cada departamento",
    date: "5 minutos atrás",},
    item2: { id: 2, title: "Reunião com o Departamento de Recursos Humanos",
      date: "Ontem, 12h30"
    },
    item3: { id: 3, title: "O Departamento de TI precisa de mais dois talentos para a posição de Designer UX/UI.",
      date: "Ontem, 09h15"
    },
  };
  return (
    <div className="pt-[17px] pb-[9px] rounded-[12px] border-[rgb(224,224,224)] border-[1px] border-solid flex flex-col ">
      <div className="flex justify-between items-center mx-5 pb-[15px]">
        <h1 className="text-[#161E54] font-medium text-[1.5rem]">Anúncio</h1>
       <DateMenu date={"Hoje, 13 de setembro de 2021"}/>
      </div>
      <div className="flex flex-col gap-2 pb-[9px]">
        <Reminder data={dataInfo.item1}/>
        <Reminder data={dataInfo.item2}/>
        <Reminder data={dataInfo.item3}/>
      </div>
      <FooterButton />
    </div>
  );
};

export default AnnounAndReminders;
