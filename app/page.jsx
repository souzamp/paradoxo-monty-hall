import Porta from "../components/Porta";
import Presente from "../components/Presente";

export default function Home() {
  /*
    aqui iremos importar os nossos componentes
  */
  return (
    <div style={{ display: "flex" }}>
      {/* <Presente /> */}
      <Porta selecionada/>
      <Porta />
    </div>
  );
}
