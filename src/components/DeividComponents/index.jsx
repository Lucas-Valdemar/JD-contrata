import React from "react";
import AvailableFrame from "./AvailableFrame";

const DeividComponents = () => {
  const firstItem = {
    title: "Posição Disponível",
    number: "24",
    extra: "Urgências",
    extraNumber: "4",
    bgColor: "orange",
    textColor:"textOrange"
  };
  const secondItem = {
    title: "Vaga de Emprego",
    number: "10",
    extra: "Contratação Ativa",
    extraNumber: "4",
    bgColor: "blue",
    textColor: "textBlue"
  }; 
  const thirdItem = {
    title: "Novos Funcionários",
    number: "24",
    extra: "Departamento",
    extraNumber: "4",
    bgColor: "pink",
    textColor: "textPink"
  };  
  return (
    <div className="flex flex-col gap-[14px]">
      <AvailableFrame key={1} dataInfo={firstItem}/>
      <AvailableFrame key={2} dataInfo={secondItem}/>
      <AvailableFrame key={3} dataInfo={thirdItem}/>

    </div>
  );
};

export default DeividComponents;
