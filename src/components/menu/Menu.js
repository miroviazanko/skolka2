import React from "react";
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

import branch from '../../assets/branch/branch-transp-600.png';




export default function Menu(props) {


    const menuList = props.menu.menuList;

    const list = menuList.map((m, i) => (
                    <NavLink
                        to={m.to} exact
                        className={styles[`${m.classMenu}`]}
                         key={i}>

                        <li className={styles.menuLi}
                            >
                            {m.name}
                        </li>

                    </NavLink>
                )
            )




    return (
        <div className={styles.menuContainer}>
            <img src={branch}
                 alt="konar menu"
                 className={styles.menuBranch}/>
            <ul className={styles.list}>
                {list}
            </ul>

        </div>
    )
}
