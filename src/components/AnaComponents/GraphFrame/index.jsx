import React from "react";
import style from "./style.module.css";


const GraphFrame = ({ title, totalEmployees, maleEmployees, femaleEmployees, percentageChange }) => {
  return (
    <div className={style.container}>
      <div className={style.funcionarios}>
        <h2>{title}</h2>
        <p className={style.contagem}>{totalEmployees}</p>
        <div className={style.distribuicao}>
          <p>{maleEmployees} Homens</p>
          <p>{femaleEmployees} Mulheres</p>
        </div>
      </div>
      <div className={style.percentual}>
      <p>talvez algo</p>
        <span>+{percentageChange}% Mês passado</span> 
      </div>
    </div>
  );
};

export default GraphFrame;
