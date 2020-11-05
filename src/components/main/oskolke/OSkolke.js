import React from 'react';

import styles from './OSkolke.module.scss';

import picture1 from '../../../assets/cliparts/pexels-sarah-trummer-955793.jpg';
import picture2 from '../../../assets/cliparts/gadgets.jpg';
import picture3 from '../../../assets/cliparts/light-bulb-4514505_1280.jpg';



export default function OSkolke() {
    return (
        <div className={styles.oSkolkeContainer}>
            <div className={styles.smallContainer}>

                <div className={styles.sew}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.header}>O ŠKÔLKE</h1>
                        <p className={styles.text}>
                            Riaditeľkou Materskej školy je Mgr. Jana Kochanová, ktorá sa spolu s pani učiteľkou Bc. Katkou Bartkovou venuje menším deťom. V triede starších detí vedú výchovno vzdelávací proces  Mgr. Stanislava Hudáková a Jana Piatková. Za čistotu je zodpovedná p. Monika Chovanová. MŠ navštevuje 40 detí. V novembri 2015 sme vyhrali súťaž Domestos pre školy. Čo to pre nás znamená? Že počas letných prázdnin v roku 2016 sme zrekonštruovali sociálne zariadenia v MŠ.  Obec získala finančné prostriedky vo výške 4000 € a  materiál v hodnote 4000 €. Je to výborný posun našej škôlky. Viac o pôsobení MŠ môžete nájsť na Facebooku – Materská Škola Radatice.

                        </p>
                    </div>
                </div>
                <div className={styles.picturesContainer}>
                        <div className={styles.pic1Wrapper}>
                            <img src={picture1}
                                alt="skolka fotka1"
                                className={styles.fotka1}/>
                        </div>
                        <div className={styles.pic2Wrapper}>
                            <img src={picture2}
                                alt="skolka fotka2"
                                className={styles.fotka2}/>
                        </div>
                        <div className={styles.pic3Wrapper}>
                            <img src={picture3}
                                alt="skolka fotka3"
                                className={styles.fotka3}/>
                        </div>
                </div>

            </div>
        </div>
    )
}
