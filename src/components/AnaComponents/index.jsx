import React from "react";
import style from "./style.module.css";
import GraphFrame from "./GraphFrame";

const AnaComponents = () => {
  return (
    <div className={style.cards}>
      <div>
        <GraphFrame 
          title="Total de Funcionários" 
          totalEmployees={216} 
          maleEmployees={120} 
          femaleEmployees={96} 
          percentageChange={2} 
        />
        <GraphFrame 
          title="Solicitação de Talento" 
          totalEmployees={16} 
          maleEmployees={6} 
          femaleEmployees={10} 
          percentageChange={5} 
        />
      </div>
    </div>
  );
};

export default AnaComponents;
