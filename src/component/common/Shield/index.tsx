'use client'
import React from 'react';
import Link from 'next/link';
import styles from "./shield.module.css";
import Image from 'next/image';

interface ShieldProps {
    top: number;
    right : number
};

const Shield: React.FC<ShieldProps> = ({ top, right }) => {
    return (
        <div className={styles["shield-parent"]} style={{ top: `${top}px`, right: `${right}px` }}>
            <div className={styles["shield"]}>
                <div className={styles["shield-top"]}>
                    <div className={styles["shield-line"]}></div>
                </div>
                <div className={styles["shield-middle"]}>
                    <Image className={styles["shield-logo"]} src="/shield.svg" alt="shield" width={100} height={100} />
                </div>
                <div className={styles["shield-bottom"]}>
                    <div className={styles["shield-line"]}></div>
                </div>
            </div>
        </div>
    );
};

export default Shield;
