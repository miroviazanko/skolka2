import React from 'react';

import styles from './OSkolke.module.scss';

import frame from '../../../assets/frame/frame-brown.png';
import leaf from '../../../assets/main/leaf/main-leaf-oskolke.png';


export default function OSkolke() {
    return (
        <div className={styles.oSkolkeContainer}>
            <div className={styles.smallContainer}>
                <p className={styles.text}>
                    Naša škôlka je najlepšia ...
                </p>
                <img src={frame}
                    alt="o skolke ramcek"
                    className={styles.frame}
                    />
                <img src={leaf}
                     alt="o skolke listok"
                     className={styles.leaf}/>
            </div>
        </div>
    )
}
