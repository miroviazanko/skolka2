import React, { useState } from "react";

import styles from './OSkolke.module.scss';

import photo1 from '../../assets/cliparts/gadgets.jpg';
import photo2 from '../../assets/cliparts/pexels-sarah-trummer-955793.jpg';

import { MdZoomOutMap } from 'react-icons/md';

import ZoomPhotoOveral from './zoomPhotoOveral/ZoomPhotoOveral';




export default function OSkolke() {

    //const photos = [photo1, photo2]

    const [ zoom1, setZoom1 ] = useState(false)
    const [ zoom2, setZoom2 ] = useState(false)

    const zoomStyles = { transform: `scale(1.2)`, filter: `brightness(50%)` }

    const onVisibleZoom = (setVissibleState) => {
        setVissibleState(prevstate => !prevstate);
    }



    return (
        <div className={styles.oskolkeContainer}>

            <div className={styles.oskolkePhotos}>
                <div className={styles.oskolkePhoto1Container}
                     onMouseEnter={ () => onVisibleZoom(setZoom1)}
                     onMouseLeave={ () => onVisibleZoom(setZoom1)}>
                    <img src={photo1}
                         alt="skolka Radatice"
                         className={styles.oskolkePhoto}
                         style={zoom1 ? {...zoomStyles} : null}/>
                    {zoom1 ? <MdZoomOutMap className={styles.zoom} size="42" fill="#ffffff"/> : null}
                </div>

                <div className={styles.oskolkePhoto2Container}
                     onMouseEnter={() => onVisibleZoom(setZoom2)}
                     onMouseLeave={() => onVisibleZoom(setZoom2)}>
                    <img src={photo2}
                         alt="skolka Radatice"
                         className={styles.oskolkePhoto}
                         style={zoom2 ? { ...zoomStyles } : null} />
                    { zoom2 ? <MdZoomOutMap className={styles.zoom} size="42" fill="#ffffff"/> : null }

                </div>
            </div>

            <ZoomPhotoOveral />

        </div>
    )
}
