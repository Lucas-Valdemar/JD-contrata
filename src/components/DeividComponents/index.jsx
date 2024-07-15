import React from "react";
import AvailableFrame from "./AvailableFrame";

const DeividComponents = () => {
  const firstItem = {
    title: "Posição Disponível",
    number: "24",
    extra: "Urgências",
    extraNumber: "4",
    bgColor: "#FFEFE7"
  };
  const secondItem = {
    title: "Vaga de Emprego",
    number: "10",
    extra: "Contratação Ativa",
    extraNumber: "4",
    bgColor: "#FFF"
  }; 
  const thirdItem = {
    title: "Novos Funcionários",
    number: "24",
    extra: "Departamento",
    extraNumber: "4",
    bgColor: "#FDEBF9"
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
