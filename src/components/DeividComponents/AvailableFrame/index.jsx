import React from "react";
import style from "./style.module.css";

// para aplicar estilos a div, adicione uma classe da seguinte forma:
// className={style.nome_da_classe}
// e então é so aplicar estilos normalmente dentro do arquivo "style.module.css"
//  que está dentro da mesma pasta.

// A estilização também pode ser feita utilizando tailwind (já está instalado)

const AvailableFrame = ({dataInfo}) => {
const bgVariants ={
  orange: "bg-[#FFEFE7] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-3 pl-5 pt-4",
  blue: "bg-[#E8F0FB] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-3 pl-5 pt-4",
  pink: "bg-[#FDEBF9] w-full h-[9.375rem]  rounded-[10px] flex flex-col gap-3 pl-5 pt-4"
}

const textVariants = {
  textOrange: "text-[#FF5151] font-medium text-base ",
  textBlue: "text-[#3786F1] font-medium text-base ",
  textPink: "text-[#EE61CF] font-medium text-base "
}
 

  

  return (
  <div className={`${bgVariants[dataInfo.bgColor]}`}>
    <div className="font-medium text-[#161E54] text-lg ">{dataInfo.title}</div>
    <div className="font-medium text-[#161E54] text-4xl">{dataInfo.number}</div>
    <div className={`${textVariants[dataInfo.textColor]}`} >{`${dataInfo.extraNumber}  ${dataInfo.extra}`}</div>
  </div>
  )
};

export default AvailableFrame;
