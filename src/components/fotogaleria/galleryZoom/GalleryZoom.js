import React, { useState, useEffect } from 'react';

import styles from './GalleryZoom.module.scss';


export default function GalleryZoom(props) {

    const [specificPhoto, setSpecificPhoto] = useState();

    useEffect( () => {
        window.addEventListener('keydown', handleKeyDown);
        setSpecificPhoto(props.clickedEl.srcZoom.default);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            props.setDisappearOveral(false);
        }
    }




    return(
        <div className={styles.GalleryZoomContainer}
             onClick={ props.onClick }
             onKeyDown={() => handleKeyDown()}>

            <img src={specificPhoto}
                 alt="Radatice materska skola"
                 className={styles.zoomedPhoto} />

        </div>
    )
}
