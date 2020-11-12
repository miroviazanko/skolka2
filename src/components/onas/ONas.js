import React, { useState } from "react";

import styles from './ONas.module.scss';

import photo1 from '../../assets/cliparts/gadgets.jpg';
import photo2 from '../../assets/cliparts/pexels-sarah-trummer-955793.jpg';

import { MdZoomOutMap } from 'react-icons/md';

//import ZoomPhotoOveral from './zoomPhotoOveral/ZoomPhotoOveral';




export default function ONas() {

    const photosArr = [photo1, photo2]

    const [ zoom0, setZoom0 ] = useState(false)
    const [ zoom1, setZoom1 ] = useState(false)

    const setZoomStates = [setZoom0, setZoom1]
    const zooms = [ zoom0, zoom1 ]
    const zoomStyles = { transform: `scale(1.2)`, filter: `brightness(50%)` }

    const onVisibleZoom = (setVissibleState) => {
        setVissibleState(prevstate => !prevstate);
    }

    const photos = photosArr.map( (ph, i) => {

        return(
            <div className={styles.oskolkePhotoContainer}
                key={i}
                onMouseEnter={() => onVisibleZoom(setZoomStates[i])}
                onMouseLeave={() => onVisibleZoom(setZoomStates[i])}>
                <img src={ph}
                    alt="skolka Radatice"
                    className={styles.oskolkePhoto}
                    style={zooms[i] ? { ...zoomStyles } : null}
                    />

                {zooms[i] ? <MdZoomOutMap className={styles.zoom} size="42" fill="#ffffff" /> : null}
            </div>
        )

    })

    return (
        <div className={styles.oskolkeContainer}>

            <div className={styles.oskolkePhotos}>
                {photos}
            </div>

            {/*<ZoomPhotoOveral />*/}

        </div>
    )
}
