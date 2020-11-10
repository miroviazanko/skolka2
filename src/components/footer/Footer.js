import React from 'react';

import styles from './Footer.module.scss';



export default function Footer() {

    return(
        <div className={styles.footerContainer}>
            <p className={styles.footerLesinkovia}>Lesinkovia</p>
            <p>Materská škola, Radatice</p>
            <hr className={styles.line}/>

        </div>
    )

}
