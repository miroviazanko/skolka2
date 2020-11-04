import React from "react";

import styles from './WelcomeScreen.module.scss';

import sun from '../../assets/sun/sun-smile.svg';
import cloud from '../../assets/sun/cloud.svg';
import cloudsLong from '../../assets/main/clouds-long.svg';


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
            <img src={cloudsLong}
                alt="mraky"
                className={styles.cloudsLong} width="5000"/>
        </div>
    )
}
