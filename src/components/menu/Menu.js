import React from "react";


import styles from './Menu.module.scss';

import leaf1 from "../../assets/menu-clip/leafes/leaf1.png";
import leaf2 from "../../assets/menu-clip/leafes/leaf2.png";
import leaf3 from "../../assets/menu-clip/leafes/leaf3.png";
import leaf4 from "../../assets/menu-clip/leafes/leaf4.png";
import leaf5 from "../../assets/menu-clip/leafes/leaf5.png";




export default function Menu(props) {


    const menuList = props.menu.menuList;
    const leafs = [leaf1, leaf2, leaf3, leaf4, leaf5]

    return (
        <div className={styles.menuContainer}>
            <ul className={styles.list}>
                {menuList.map( (m,i) => (
                    <li className={styles.menuLi}
                        key={i}>
                        {m.name}
                        <img src={  leafs[i] }
                             alt="menu lístok"
                             width="50"/>
                    </li>
                )
                )}
            </ul>

        </div>
    )
}
