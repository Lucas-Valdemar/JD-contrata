import React from "react";
import style from "./style.module.css"; // Aqui é feito a importação do arquivo de estilos.css, embaixo explicação de como funciona!

// para aplicar estilos a div, adicione uma classe da seguinte forma:
// className={style.nome_da_classe}
// e então é so aplicar estilos normalmente dentro do arquivo "style.module.css"
//  que está dentro da mesma pasta.

// A estilização também pode ser feita utilizando tailwind (já está instalado).

const ReminderFrame = () => {
  return <div className={style.minha_div}>Comece a partir daqui!</div>;
};

export default ReminderFrame;
