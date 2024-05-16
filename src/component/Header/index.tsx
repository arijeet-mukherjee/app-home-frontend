
import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import NavBarItem from './NavBarItem/index';
import Button from '../common/Button';
import Link from 'next/link';
import data from '../../data.json';


interface HeaderProps {
    openModal: Function
};

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    console.log(data.header.navigation_bar.navbarItems);
    return (
        <nav className={styles.header}>
            <div className={styles.Logo}>
                <Link href="/">
                    <Image
                        src="/secdesk_logo.svg"
                        alt="secdesk logo"
                        width={177}
                        height={48}

                    />
                </Link>
            </div>
            <div className={styles.navbar}>
                <NavBarItem list={data.header.navigation_bar.navbarItems} />
                <Button label='Contact' action_svg={'phone.svg'} />
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