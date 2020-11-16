import React, { useEffect, useMemo } from "react";

import styles from './ZoomPhotoOveral.module.scss';





export default function OSkolke(props) {


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown );

        console.log(props.zoom0, props.zoom1);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [props.zoom0, props.zoom1 ]);


    const handleKeyDown = (e) => {
        if ( e.key === 'Escape' ) {
            props.setDisplay(false);
        }
    }


    return (
        <div className={styles.zoomPhotoContainer}
             onClick={props.onClick}
             onKeyDown={() => handleKeyDown()}
        >
           { props.zoom0 ?
            <img src={props.photo1}
                 alt="Radatice materska skola1"
                 className={styles.displayZoomPhoto}/>
            :
            <img src={props.photo2}
                alt="Radatice materska skola2"
                className={styles.displayZoomPhoto}/>
            }

        </div>
    )
}
