import PortaModel from "../model/porta";
import styles from "../styles/Porta.module.css";

interface PortaProps {
    value: PortaModel

    // 1 - vamos adicionar um novo parametro do tipo PortaModel e retornar void (vazio)
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value

    // podemos receber o valor de qual propriedade usar no CSS 
    // via parametro
    const selecionada = porta.selecionada && !porta.aberta ? styles.porta_selecionada : ''

    // 2 - vamos criar uma constante para poder controlar o estado da porta 
    //      sem alterar o valor original
    const alternarSelecao = e => props.onChange(porta.alternarSelecao())

    // 7 passo - criar um constante abrir
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    // 5 passo
    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.marcaneta}
                    // 8 passo - adicionar um evento ao clicarmos na macaneta
                    onClick={abrir}
                    ></div>
            </div>
        )
    }

    // 3 - precisamo usar a propriedade na 1 div onClick={alternarSelecao}
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.grade} ${selecionada}`}>
                {/* 6 passo - estamos trabalhando com renderizacao condicional */}
                {porta.aberta ? false : renderizarPorta()}
            </div>

            <div className={styles.piso}></div>
        </div>

    )
}