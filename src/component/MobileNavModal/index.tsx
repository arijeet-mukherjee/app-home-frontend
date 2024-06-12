'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import Header from '@component/Header';
import Button from '@component/common/Button';
import Shield from '@component/common/Shield';
import data from '../../data.json'

interface dd {
    label: string;
    url: string;
}

interface navlink {
    label: string;
    url: string;
    dditem?: dd[];
}
interface MobileNavModalProps {
    list: navlink[];
    closeModal: Function;
    modalState: boolean;
}
const MobileNavModal: FC<MobileNavModalProps> = ({ list, closeModal, modalState }) => {
    return (
        <div className={styles.mobileNavModal} style={modalState ? {
            height: '100vh'
        } : {
            height: '0vh',
        }}>
            <div className={styles.headerContainer}>
                <Header openModal={closeModal} modalState={modalState} />
            </div>
            <div className={styles.navBar}>
                {data.header.navigation_bar.navbarItems?.map((item, index) => {
                    if (item.dditem?.length === 0) {
                        return (

                            <Link className={styles.navItem} href={item.url} key={index} >{item.label}</Link>

                        )
                    }

                }
                )}
            </div>
            <div className={styles.btnContainer}>
                <Button label={data.header.navigation_bar.button.label} action_svg={data.header.navigation_bar.button.action_svg} />
            </div>
            <div className={styles.navModalBackground}>
                <Image src='/navModalBackground.svg'
                    alt="nav modal background"
                    objectFit='cover'
                    fill={true}
                />
            </div>
        </div>
    );
};
export default MobileNavModal;