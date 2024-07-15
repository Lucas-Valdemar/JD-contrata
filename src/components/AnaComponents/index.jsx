import React from "react";
import style from "./style.module.css";
import GraphFrame from "./GraphFrame";
import graph1 from "../../assets/graph1.png";
import graph2 from "../../assets/graph2.png";

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
          image={graph1} 
        />
        <GraphFrame 
          title="Solicitação de Talento" 
          totalEmployees={16} 
          maleEmployees={6} 
          femaleEmployees={10} 
          percentageChange={5}
          image={graph2} 
        />
      </div>
    </div>
  );
};

export default AnaComponents;
