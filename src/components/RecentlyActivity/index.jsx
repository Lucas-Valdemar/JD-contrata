import React from "react";
import PrimaryButtonSmall from "../AllButtons/PrimaryButtonSmall";

const RecentlyActivity = () => {
  const dataInfo = {
    date: "10h40, Sexta-feira, 10 de setembro de 2021",
    title: "Você Postou uma Nova Vaga",
    text: "Por favor, verifique os requisitos e os termos de trabalho e certifique-se de que está tudo correto.",
    totalActivities: "12",
  };
  return (
    <div className="bg-[#161E54] rounded-[10px] flex flex-col text-white px-5 pb-[31px] sm:h-full lg:h-[16.125rem]">
      <div className="bg-[#1B204A] rounded-t-[10px] lg:h-[3rem]">
        <h1 className=" font-medium text-base py-4">Recently Activity</h1>
      </div>
      <div className="flex flex-col gap-[7px] mb-[4px] mt-6 sm:mt-[46px] mb-[27px] lg:mt-[1.625rem]">
        <p className="font-medium font-roboto opacity-60 text-[10px]">
          {dataInfo.date}
        </p>
        <p className="font-medium text-lg">{dataInfo.title}</p>
        <p className="font-roboto text-sm opacity-80">{dataInfo.text}</p>
        
      </div>
      <div className="sm:mt-auto lg:flex gap-[9px]">
        <p className="font-roboto text-sm mb-[18px] sm:mb-[2.375rem] lg:mb-[0] leading-[40px]">{`Hoje você realizou ${dataInfo.totalActivities} atividades`}</p>
        <PrimaryButtonSmall buttonName={"Ver Todas"} />
      </div>
    </div>
  );
};

export default RecentlyActivity;
