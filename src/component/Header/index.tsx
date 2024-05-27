
import React from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import Button from '../common/Button';
import Link from 'next/link';
import data from '../../data.json';
import { useState } from 'react';
import DDMenu from '@component/common/DropdownMenu';


interface HeaderProps {
    openModal: Function;
};

const Header: React.FC<HeaderProps> = ({ openModal }) => {
    const [open, setOpen] = useState(false);

    const handledd = () => {
        setOpen(!open)
    }

    function handelClick(e: MouseEvent) {
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
                {data.header.navigation_bar.navbarItems?.map((item, index) => {
                    if (item.dditem?.length === 0) {
                        return (
                            <div aria-label={item.label} key={index}>
                                <Link className={styles.navItem} href={item.url} >{item.label}</Link>
                            </div>
                        )
                    }
                    return (
                        <div aria-label={item.label} key={index}>
                            <Link
                                style={{ color: "white" }}
                                className={styles.navItem}
                                href=""
                                onClick={(e) => {
                                    e.preventDefault;
                                    handledd();
                                }}
                            >{item.label}
                                <span className={styles.arrowDown}></span>
                                {open && <DDMenu list={item.dditem} offsetX={0} offsetY={80} />}
                            </Link>
                        </div>
                    )
                })
                }

                <Button label={data.header.navigation_bar.button.label} action_svg={data.header.navigation_bar.button.action_svg} hc={handelClick} />
            </div>
            <div className={styles.mobileLang}>
                {
                    data.header.navigation_bar.navbarItems?.map((item, index) => {
                        if (item.dditem?.length !== 0) {
                            return (
                                <div aria-label={item.label} key={index}>

                                    <Link className={styles.navItem} href="" onClick={(e) => {
                                        e.preventDefault;
                                        handledd();
                                    }}
                                    >{item.label}
                                        <span className={styles.arrowDown}></span>
                                        {open && <DDMenu list={item.dditem} offsetX={0} offsetY={80} />}
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className={styles.burgerMenuLogo}>

                <Image src="/burger-menu-icon.svg" alt="menu"
                    width={50}
                    height={50}

                    onClick={(e) => {
                        e.preventDefault();
                        openModal();
                    }}
                />
            </div>
        </nav>
    );
};

export default Header;
