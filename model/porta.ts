export default class PortaModel {
    // # usamos para definir que o atributo é privado em javascript
    // estamos definiando nossos atributos
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    // vamos criar nosso construtor de classe
    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    // precisamos criar nos Gets
    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }

    get fechada() {
        return !this.aberta
    }

    alternarSelecao() {
        // estamos alterando o valor selecionado
        const selecionada = !this.#selecionada

        // para não alterar o estado da nossa instância vamos retornar uma nova apenas com a
        // modificacao que fizemos
        return new PortaModel(this.#numero, this.#temPresente, selecionada, this.#aberta)
    }

    desmarcarPorta() {
        const selecionada = false
        return new PortaModel(this.#numero, this.#temPresente, selecionada, this.#aberta)
    }

    abrir() {
        const aberta = true
        return new PortaModel(this.#numero, this.#temPresente, this.#selecionada, aberta)
    }
}