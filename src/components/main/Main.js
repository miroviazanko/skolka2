import React from 'react';

import styles from './Main.module.scss';

import OSkolke from './oskolke/OSkolke';


export default function Main() {
    return (
        <main className={styles.main}>
            <OSkolke />
        </main>
    )
}

