import React from "react";

import styles from './Menu.module.scss';

import branch from '../../assets/branch/branch-transp-500x380.png';




export default function Menu(props) {


    const menuList = props.menu.menuList;

    const list = menuList.map((m, i) => (
                    <div className={styles[`${m.classMenu}`]}
                         key={i}>

                        <li className={styles.menuLi}
                            >
                            {m.name}
                        </li>

                    </div>
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
