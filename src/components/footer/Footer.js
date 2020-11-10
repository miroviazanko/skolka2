import React from 'react';

import styles from './Footer.module.scss';

import list from '../menu/menu.json';


export default function Footer() {

    const footerList = list.menuList.map( (l,i) => {
        return (
            <p key={i}>{l.name}</p>
        )
    })

    return(
        <div className={styles.footerContainer}>
            <p className={styles.footerLesinkovia}>Lesinkovia</p>
            <p>Materská škola, Radatice</p>
            <hr className={styles.line}/>
            <div className={styles.footerPolozky}>
                {footerList}
            </div>
            <hr className={styles.line} />
            <p className={styles.copyright}>&#169; 2020 MŠ Radatice
            </p>
        </div>
    )

}
