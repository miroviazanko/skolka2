import React from "react";
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

//import sun from '../../assets/sun/sun-smile.svg';
import branch from '../../assets/branch/real-branch-transp-700.png';


export default function Header() {





    return (
        <div className={styles.welcomeSmallContainer}>

                <NavLink to="/" exact className={styles.sun}>


                </NavLink>

            <img src={branch}
                alt="konar"
                className={styles.branch}
            />



            <p className={styles.lesinkovia}>Lesinkovia</p>
            <p className={styles.textik}>Vedieme deti s láskou k prírode</p>

        </div>
    )
}





