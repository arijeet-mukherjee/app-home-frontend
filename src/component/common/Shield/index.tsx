'use client'
import React from 'react';
import Link from 'next/link';
import styles from "./shield.module.css";
import Image from 'next/image';

interface ShieldProps {
    top: number;
    left: number;
};

const Shield: React.FC<ShieldProps> = ({ top, left }) => {
    return (
        <div className={styles["shield-parent"]} style={{ top: `${top}px`, left: `${left}px` }}>
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
