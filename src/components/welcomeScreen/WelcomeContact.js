import React from 'react';

import styles from './WelcomeContact.module.scss';

import { MdPlace } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';



export default function WelcomeScreen() {

    return (
        <div className={styles.welcomeContactContainer}>

            <div className={styles.gpsContainer}>
                <MdPlace size={70} fill="#b73d2e" />
            </div>

            <div className={styles.timeContainer}>
                <IoMdClock size={70} fill="#ea7b22" />
            </div>

            <div className={styles.mailContainer}>
                <HiOutlineMail size={70} strokeWidth="5" stroke="#046bb0" fill="#ffffff" />
            </div>

            <div className={styles.phoneContainer}>
                <FiPhoneCall size={65} strokeWidth=".8" stroke="#ffffff" fill="#6da61b" />
            </div>

        </div>

    )

}



