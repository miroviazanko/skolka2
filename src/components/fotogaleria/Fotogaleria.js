import React, { useState} from "react";


import styles from './Fotogaleria.module.scss';

import { gallery } from './galleryJs';


export default function Fotogaleria() {

    const galleryArr = gallery.gallery;

    const [zoom, setZoom] = useState(false);

    const zoomStyles = { transform: `scale(1.2)`, filter: `brightness(50%)` }

    const handleVissible = (setVissibleState, element) => {
            setVissibleState(prevstate => !prevstate);

    }



    const galleryPhotos = galleryArr.map( g => {
        return (
            <div className={styles.wrapperPhoto}
                 onMouseEnter={() => handleVissible(setZoom, g)}
                 onMouseLeave={() => handleVissible(setZoom, g)}
                 //onClick={() => onVisibleZoom(setOveral)}
            >
                <img src={g.src.default}
                    alt={g.alt}
                    key={g.key}
                    className={styles.specificPhoto}
                    style={g ? { ...zoomStyles } : null}
                />
            </div>
        )
    })





    return (
        <div className={styles.fotogaleriaContainer}>
            <h2 className={styles.fotogaleriaHeader}>Fotogaléria</h2>
            <div className={styles.photosContainer}>
                {galleryPhotos}
            </div>
        </div>
    )
}
