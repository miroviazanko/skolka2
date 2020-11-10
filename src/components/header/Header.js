import React from "react";

import styles from './Header.module.scss';

import sun from '../../assets/sun/sun-smile.svg';





export default function Header() {





    return (
        <div className={styles.welcomeSmallContainer}>
            <div className={styles.sun}>
                <img src={sun}
                    alt="slniecko"
                />

            </div>
            <p className={styles.lesinkovia}>Lesinkovia</p>

        </div>
    )
}





