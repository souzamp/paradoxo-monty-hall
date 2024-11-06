import PortaModel from "../model/porta";
import styles from "../styles/Porta.module.css";

interface PortaProps {
    porta: PortaModel
}

export default function Porta(props) {
    const {porta} = props
    // podemos receber o valor de qual propriedade usar no CSS via parametro
    const selecionada = porta.selecionada ? styles.porta_selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.grade} ${selecionada}` }>
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.marcaneta}></div>
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>

    )
}