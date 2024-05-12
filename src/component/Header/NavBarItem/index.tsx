'use client';
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';
import DDMenu from  '../../common/DropdownMenu/index';

const list = ["ENG", "SPN", "DTC"];

const NavBarItem: FC = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div className={styles.navItemContainer} aria-label='site navigation'>
            <Link className={styles.navItem} href="" aria-label='Introduction'>Introduction</Link>
            <Link className={styles.navItem} href="" aria-label='USP'>USP</Link>
            <Link className={styles.navItem} href="" aria-label='Offering'>offering</Link>
            <Link className={styles.navItem} href="" aria-label='More'>More</Link>
            <Link className={styles.navItem} href="" aria-label='Quiz'>Quiz</Link>
            <div aria-label='Language settings'>
                <Link className={styles.navItem} href="" onClick={(e) => {
                    e.preventDefault;
                    handleClick();
                }}
                    aria-label='Language settings'
                >EN 
                <div className={styles.arrowDown}></div>
                </Link>
                {open && <DDMenu list={list} offsetX={-75} offsetY={28} />}
            </div>
        </div>
    );
};

export default NavBarItem;