import React from 'react';

import styles from './Personal.module.scss';



export default function Personal() {
    return (
        <div className={styles.personalContainer}>
            <div className={styles.sew}>
                <div className={styles.textContainer}>
                    <h1 className={styles.header}>Personál</h1>
                    <p className={styles.text}>
                        Riaditeľkou Materskej školy je Mgr. Jana Kochanová, ktorá sa spolu s pani učiteľkou Bc. Katkou Bartkovou venuje menším deťom. V triede starších detí vedú výchovno vzdelávací proces  Mgr. Stanislava Hudáková a Jana Piatková. Za čistotu je zodpovedná p. Monika Chovanová. MŠ navštevuje 40 detí. V novembri 2015 sme vyhrali súťaž Domestos pre školy. Čo to pre nás znamená? Že počas letných prázdnin v roku 2016 sme zrekonštruovali sociálne zariadenia v MŠ.  Obec získala finančné prostriedky vo výške 4000 € a  materiál v hodnote 4000 €. Je to výborný posun našej škôlky. Viac o pôsobení MŠ môžete nájsť na Facebooku – Materská Škola Radatice.

                        </p>
                </div>
            </div>
        </div>
    )
}
