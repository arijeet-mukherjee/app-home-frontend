'use client';
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';

interface DDMenuProps {
    list: string[];
    offsetX?: number;
    offsetY?: number;
}
const DDMenu: React.FC<DDMenuProps> = ({ list, offsetX = 0, offsetY = 28 }) => {
    return (
        <div className={styles.dropdown} style={{ transform: `translateX(${offsetX}px) translateY(${offsetY}px)` }} aria-label='language menu'>
            {list.map((item, index) => {
                return (
                    <Link href="" aria-label={item} className={styles.ddItem} key={index}>{item}</Link>
                )
            })}
        </div>
    );
};

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
                >EN ▼</Link>
                {open && <DDMenu list={list} offsetX={-75} offsetY={28} />}
            </div>
        </div>
    );
};

export default NavBarItem;