'use client'

import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export default function Home() {

  //estamos definindo o estado da nossa porta
  const [p1, setP1] = useState(new PortaModel(1))

  return (
    <div style={{ display: "flex" }}>
      <Porta
        value={p1}
        
        //aqui estamos chamando a nova propriedade para alternar a selecao
        onChange={novaPorta => setP1(novaPorta)}
      />
    </div>
  );
}
