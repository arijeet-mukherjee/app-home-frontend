import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import NavBarItem from './NavBarItem/index';
import Button from '../common/Button';

const Header: React.FC = () => {

    return (
        <nav className={styles.header}>
            <div className={styles.Logo}>
                <Image
                    src="/secdesk_logo.svg"
                    alt="secdesk logo"
                    width={177}
                    height={48}

                />
            </div>
            <div className={styles.navbar}>
                <NavBarItem />
                <Button label='Contact' action_svg={'phone.svg'} />
            </div>
            <Image src="/burger-menu-icon.svg" alt="menu"
                width={50}
                height={50}
                className={styles.burgerMenuLogo}
            />
        </nav>
    );
};

export default Header;