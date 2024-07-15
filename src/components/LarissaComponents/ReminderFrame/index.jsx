import React from "react";
import style from "./style.module.css"; // Aqui é feito a importação do arquivo de estilos.css, embaixo explicação de como funciona!
import menuIcon from "./assets/menuIcon.svg";


// para aplicar estilos a div, adicione uma classe da seguinte forma:
// className={style.nome_da_classe}
// e então é so aplicar estilos normalmente dentro do arquivo "style.module.css"
//  que está dentro da mesma pasta.

// A estilização também pode ser feita utilizando tailwind (já está instalado).

const ReminderFrame = () => {
  const dataInfo = {
    title: "Agendamentos obrigatórios",
    date: "5 Minutes ago",
  };
  return (
    <div className="bg-[#fafafa] rounded-[6px] border-[0.5px] border-solid border-[#E0E0E0] px-[14px] flex flex-col gap-[5px] pt-2 pb-[6px] ">
      <h3 className="text-sm text-[#303030]">{dataInfo.title}</h3>
      <div className="flex justify-between items-center">
        <p className="font-roboto text-[#686868] text-[10px]">
          {dataInfo.date}
        </p>
        <img src={menuIcon} alt="menuIcon" />
      </div>
    </div>
  )
};

export default ReminderFrame;
