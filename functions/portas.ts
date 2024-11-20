import PortaModel from "../model/porta"

// funcao responsavel por criar um array de portas
// que tem 2 parametros qtde e selecionada e retorna um array PortaModel[]
export function criarPortas(qtde: number, selecionada: number): PortaModel[] {
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1

        // verifico se o numero da porta é igual a selecionada
        const temPresente = numero === selecionada

        // estam os retornando uma instância de PortaModel
        return new PortaModel(numero, temPresente)
    })
}


// funcao responsavel por alterar a porta ao mudarmos de porta selecionada
// que tem 2 parametros um array de PortaModel[] e a porta modificada, retornando um array PortaModel[]
export function atualizarPortas(portas: PortaModel[], portaModifiada: PortaModel): PortaModel[]{
    return portas.map(portAtual => {
        const portaIgualModificada = portAtual.numero === portaModifiada.numero

        if(portaIgualModificada){
            return portaModifiada
        } else {
            // estou garantindo que ao marca uma porta as outras estarão desmarcadas
            // mas perceba tmb que estou aplicando um lógica porque se a porta estiver aberta
            // retorno a mesma porta
            return portaModifiada.aberta ? portAtual : portAtual.desmarcarPorta()
        }
    })
}