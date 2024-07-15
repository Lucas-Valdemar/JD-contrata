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
    title: "Posição Disponível",
    number: "24",
    extra: "Urgências",
    extraNumber: "4",
    bgColor: "rgba(232, 240, 251, 1)"
  }; 
  const thirdItem = {
    title: "Posição Disponível",
    number: "24",
    extra: "Urgências",
    extraNumber: "4",
    bgColor: "#FDEBF9"
  };  
  return (
    <div className="flex flex-col gap-[14px]">
      <AvailableFrame dataInfo={firstItem}/>
      <AvailableFrame dataInfo={secondItem}/>
      <AvailableFrame dataInfo={thirdItem}/>

    </div>
  );
};

export default DeividComponents;
