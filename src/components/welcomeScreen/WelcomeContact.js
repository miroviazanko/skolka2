import React from 'react';

import styles from './WelcomeContact.module.scss';

import { MdPlace, MdEuroSymbol } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import {  HiOutlineMail } from 'react-icons/hi';
import {  FiPhoneCall } from 'react-icons/fi';


export default function WelcomeScreen() {

    return (
        <div className={styles.welcomeContactContainer}>

            <div className={styles.gpsContainer}>
                <MdPlace size={70} fill="#b73d2e" />
                <p className={styles.addressHeader}>Adresa</p>
                <p className={styles.address}>Radatice ...</p>
            </div>

            <div className={styles.timeContainer}>
                <IoMdClock size={70} fill="#ea7b22" />
                <p className={styles.openHeader}>Otváracia doba</p>
                <p className={styles.open}>7:00 - 16:00</p>
            </div>

            <div className={styles.mailContainer}>
                <HiOutlineMail size={70} strokeWidth="5" stroke="#046bb0" fill="#ffffff" />
                <p className={styles.mailHeader}>Napíšte nám</p>
                <p className={styles.mail}>skolka@skolka.sk</p>
            </div>

            <div className={styles.phoneContainer}>
                <FiPhoneCall size={65} strokeWidth=".8" stroke="#ffffff" fill="#6da61b" />
                <p className={styles.callHeader}>Zavolajte nám</p>
                <p className={styles.call}>+421 912 345 678</p>
            </div>

            <div className={styles.phoneContainer}>
                <p className={styles.taxIcon}>10
                    <MdEuroSymbol size={65} strokeWidth=".8" stroke="#ffffff" fill="#bbb800" className={styles.euro}/>
                </p>
                <p className={styles.taxHeader}>Školné</p>
                <p className={styles.call}>IBAN: ...</p>
            </div>

        </div>

    )

}



