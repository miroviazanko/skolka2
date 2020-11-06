import React from "react";

import styles from './WelcomeScreen.module.scss';

import sun from '../../assets/sun/sun-smile.svg';
import cloud from '../../assets/sun/cloud.svg';
import children from '../../assets/cliparts/children-transparent-900.png';

import WelcomeContact from './WelcomeContact';





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
                        <p>Materska škola Radatice - Lesinkovia, bla bla bla... </p>
                    </article>
                </div>



            </div>
            <h1>
                Vitajte na stránke materskej školy v Radaticiach
            </h1>

            <img src={children}
                 alt="deti"
                 className={styles.children} />

            <p className={styles.introText}>
                Škôlka ponúka všetko čo si môžu rodičia pre svoje deti priať, od kvalifikovaných odborných pedagógov po bohaté priestory v interiéri a veľký areál, v ktorom sa budú deti cítiť ako doma.
            </p>

            <WelcomeContact />

        </div>

    )
}
