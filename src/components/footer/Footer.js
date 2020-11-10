import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.scss';

import list from '../menu/menu.json';


export default function Footer(props) {

    const footerList = list.menuList.map( (l,i) => {
        return (
            <NavLink to={l.to} exact
                     key={i}
                     onClick={props.onClick}>

                        {l.name}

            </NavLink>
        )
    })

    return(
        <div className={styles.footerContainer}>
            <p className={styles.footerLesinkovia}>Lesinkovia</p>
            <p>Materská škola, Radatice</p>
            <hr className={styles.line}/>
            <div className={styles.footerPolozky}>
                {footerList}
            </div>
            <hr className={styles.line} />
            <p className={styles.copyright}>&#169; 2020 MŠ Radatice
            </p>
        </div>
    )

}

/*<NavLink
    to={m.to} exact
    className={styles[`${m.classMenu}`]}
    key={i}
    onClick={props.onClick}>

    <li className={styles.menuLi}
    >
        {m.name}
    </li>

</NavLink>*/
