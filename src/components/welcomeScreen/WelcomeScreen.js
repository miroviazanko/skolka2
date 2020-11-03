import React from "react";

import styles from './WelcomeScreen.module.scss';

import sun from '../../assets/sun/sun-smile.svg';
import background from '../../assets/cliparts/backgroun-1920x1024CloudsSmall.png';
import cloud from '../../assets/sun/cloud.svg';
import { BiMouse } from 'react-icons/bi';

export default function WelcomeScreen() {
    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeSmallContainer}>
                <div className={styles.sun}>
                    <img src={sun}
                        alt="slniecko"
                    />

                </div>


                <div className={styles.cloud}>
                    <img src={cloud}
                        alt="luka" />
                    <article className={styles.welcomeArticle}>
                        <p>Materska škola Radatice - Lesinkovia, bla bla bla...</p>
                    </article>
                </div>
            </div>
        </div>
    )
}
