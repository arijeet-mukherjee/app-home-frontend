'use client';
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';

const DDMenu: React.FC<{ list: string[] }> = ({ list }) => {
    return (

        <div className={styles.dropdown}>
            <div className=''>
                {list.map((item) => {
                    return (
                        <div className={styles.ddmItem}>
                            <Link href="">{item}</Link>
                        </div>
                    )
                })}
            </div>
        </div>)
}

const list = ["ENG", "SPN", "DTC"];

const NavBarItem: FC = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className={styles.navItemContainer}>
            <Link className={styles.navItem} href="">Introduction</Link>
            <Link className={styles.navItem} href="">USP</Link>
            <Link className={styles.navItem} href="">offering</Link>
            <Link className={styles.navItem} href="">More</Link>
            <Link className={styles.navItem} href="">Quiz</Link>
            <div>
                <Link className={styles.navItem} href="" onClick={() => handleClick()}>EN ▼</Link>
                {open && <DDMenu list={list} />}
            </div>
        </div>
    );
};

export default NavBarItem;