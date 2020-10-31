import React from "react";


import styles from './Menu.module.scss';

import leaf1 from "../../assets/menu-clip/leafes/leafn1.png";
import leaf2 from "../../assets/menu-clip/leafes/leafn2.png";
import leaf3 from "../../assets/menu-clip/leafes/leafn5.png";
import leaf4 from "../../assets/menu-clip/leafes/leafn4.png";
import leaf5 from "../../assets/menu-clip/leafes/leafn3.png";
import { useState } from "react";




export default function Menu(props) {


    const menuList = props.menu.menuList;
    const leafs = [leaf1, leaf2, leaf3, leaf4, leaf5]

    const list = menuList.map((m, i) => (
                    <div className={styles.wrapper}>

                        <li className={styles.menuLi}
                            key={i}>
                            {m.name}
                        </li>
                        <img src={leafs[i]}
                            alt={m.classMenu}
                            className={styles[`${m.classMenu}`]}
                        />
                    </div>
                )
            )




    return (
        <div className={styles.menuContainer}>
            <ul className={styles.list}>
                {list}
            </ul>

        </div>
    )
}
