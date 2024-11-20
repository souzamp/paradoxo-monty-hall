'use client'

import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";

import { criarPortas, atualizarPortas } from "../functions/portas";

export default function Home() {

  // estamos criando uma constante chamando nossa função responsavel por crias
  // de acordo o número que passamos e escolhendo em qual porta o presente vai está
  const [portas, setPorta] = useState(criarPortas(3, 2))


  // funcao que renderiza as portas na tela
  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta
        key={porta.numero}
        value={porta}
        onChange={novaPorta => setPorta(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div style={{ display: "flex" }}>

      {/* chamamos a funcao de renderizacao dentro da Div */}
      {renderizarPortas()}
    </div>
  );
}
