'use client'

import { useState } from "react";
import Porta from "../../components/Porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";
import styles from '../../styles/Jogo.module.css'

import Link from 'next/link'

export default function Jogo() {
    const [portas, setPorta] = useState(criarPortas(5, 1))

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta
                key={porta.numero}
                value={porta}
                onChange={novaPorta => setPorta(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo!</button>    
                </Link>
            </div>
        </div>
    );
}