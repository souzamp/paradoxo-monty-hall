import styles from "../styles/Porta.module.css";

export default function Porta(props) {
    // podemos receber o valor de qual propriedade usar no CSS via parametro
    const selecionada = props.selecionada ? styles.porta_selecionada : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.grade} ${selecionada}` }>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                    <div className={styles.marcaneta}></div>
                </div>
            </div>
            <div className={styles.piso}></div>
        </div>

    )
}