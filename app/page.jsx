import Porta from "../components/Porta";
import Presente from "../components/Presente";
import PortaModel from "../model/porta";

export default function Home() {
  /*
    aqui iremos importar os nossos componentes
  */

  const p1 = new PortaModel(1)
  const p2 = new PortaModel(2)

  return (
    <div style={{ display: "flex" }}>
      {/* <Presente /> */}
      <Porta porta={p1} />
      <Porta porta={p2} />
    </div>
  );
}
