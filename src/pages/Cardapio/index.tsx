import styles from './Cardapio.module.scss';
import logo from 'assets/logo.png'
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros/index';

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                Cuide-se bem, você merece!
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Catálogo</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                <Filtros/>
            </div>
            </section>
            
            
        </main>
    );
}