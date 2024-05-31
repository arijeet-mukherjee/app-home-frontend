
import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import NavBarItem from './NavBarItem/index';
import Button from '../common/Button';
import Link from 'next/link';
import data from '../../data.json';


interface HeaderProps {
    openModal: Function;
};

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    function handelClick(e : MouseEvent) {
        e.preventDefault();
    };
    return (
        <nav className={styles.header}>
            <div className={styles.Logo}>
                <Link href={data.header.navigation_bar.logo.href}>
                    <Image
                        src={data.header.navigation_bar.logo.src}
                        alt={data.header.navigation_bar.logo.alt}
                        width={177}
                        height={48}
                    />
                </Link>
            </div>
            <div className={styles.navbar}>
                <NavBarItem list={data.header.navigation_bar.navbarItems} />
                <Button label={data.header.navigation_bar.button.label} action_svg={data.header.navigation_bar.button.action_svg} hc={handelClick} />
            </div>
            <Image src="/burger-menu-icon.svg" alt="menu"
                width={50}
                height={50}
                className={styles.burgerMenuLogo}
                onClick={(e) => {
                    e.preventDefault();
                    openModal();
                }}
            />
        </nav>
    );
};

export default Header;
