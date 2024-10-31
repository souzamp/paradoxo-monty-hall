
// importando nosso arquivo css que representa nosso componente Presente
import styles from "../styles/Presente.module.css";

export default function Presente() {
    //  nesse projeto vamos trabalhar com arquivos css. Todos os nossos arquivos vã0 ficar
    //      em uma pasta chamada stlyes

    return (
        <div className={styles.presente}>
            <div className={styles.tampa}></div>
            <div className={styles.caixa}></div>
            <div className={styles.laco_vertical}></div>
            <div className={styles.laco_horizontal}></div>
        </div>
    )
}