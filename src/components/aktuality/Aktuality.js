import React from "react";


import styles from './Aktuality.module.scss';
import aktuality from './aktuality.json';



export default function Aktuality() {



    return (
        <div className={styles.aktualityContainer}>
            <h2>Aktuality</h2>
            <p>Naša MŠ sa pravidelne zapája do rôznych súťaží, projektov, aktivít. Aktívne vyhľadávame možnosti, kde sa môžu zapojiť deti, rodičia, či všetci priatelia. Samozrejme sa snažíme súťažiť aj v grantoch, ktoré pre našu MŠ znamenajú veľkú pomoc, či už materiálnu alebo finančnú. Vo viacerých sa ukázalo, že aj rodičia a učitelia vedia byť zomknutí a potvrdilo sa staré známe porekadlo: ,,V jednote je sila!“</p>
        </div>
    )
}
