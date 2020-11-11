import React from "react";
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import sun from '../../assets/sun/sun-smile.svg';



export default function Header() {





    return (
        <div className={styles.welcomeSmallContainer}>

                <NavLink to="/" exact className={styles.sun}>
                    <img src={sun}
                        alt="slniecko"
                    />

                </NavLink>

            <p className={styles.lesinkovia}>Lesinkovia</p>

        </div>
    )
}





