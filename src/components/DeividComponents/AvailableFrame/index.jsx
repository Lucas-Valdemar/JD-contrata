import React from "react";
import style from "./style.module.css";

// para aplicar estilos a div, adicione uma classe da seguinte forma:
// className={style.nome_da_classe}
// e então é so aplicar estilos normalmente dentro do arquivo "style.module.css"
//  que está dentro da mesma pasta.

// A estilização também pode ser feita utilizando tailwind (já está instalado)

const AvailableFrame = ({dataInfo}) => {
  
  
  return (
  <div className={`w-full h-[9.375rem] bg-[${dataInfo.bgColor}] rounded-[10px] flex flex-col gap-3 pl-5 pt-4`}>
    <div className="font-medium text-[#161E54] text-lg">{dataInfo.title}</div>
    <div className="font-medium text-[#161E54] text-4xl">{dataInfo.number}</div>
    <div className={`font-medium text-[${dataInfo.textColor}] text-base`}>{`${dataInfo.extraNumber}  ${dataInfo.extra}`}</div>
  </div>
  )
};

export default AvailableFrame;
