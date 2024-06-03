
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import Button from '../common/Button';
import Link from 'next/link';
import data from '../../data.json';
import DDMenu from '@component/common/DropdownMenu';
import { isMobile } from '@util/index';


interface HeaderProps {
    openModal: Function;
    modalState: boolean
};

const Header: React.FC<HeaderProps> = ({ openModal, modalState }) => {
    const [logoSize, setLogoSize] = useState({
        height: 48,
        width: 176
    })
    const [open, setOpen] = useState(false);

    const handledd = () => {
        setOpen(!open)
    }

    function handelClick(e: MouseEvent) {
        e.preventDefault();
    };

    useEffect(() => {
        if (isMobile()) {
            setLogoSize({
                height: 23,
                width: 85
            })
        }
    }, []);
    return (
        <nav className={styles.header}>
            <div className={styles.Logo}>
                <Link href={data.header.navigation_bar.logo.href}>
                    <Image
                        src={data.header.navigation_bar.logo.src}
                        alt={data.header.navigation_bar.logo.alt}
                        width={logoSize.width}
                        height={logoSize.height}
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
                                className={styles.navItem}
                                href=""
                                onClick={(e) => {
                                    e.preventDefault;
                                    handledd();
                                }}
                            >{item.label}
                                <span className={styles.arrowDown} style={{
                                    transform: open ? 'rotate(180deg)' : ''
                                }}></span>
                                {open && <DDMenu list={item.dditem} offsetX={0} offsetY={70} />}
                            </Link>
                        </div>)
                })
                }

                <Button label={data.header.navigation_bar.button.label} action_svg={data.header.navigation_bar.button.action_svg} hc={handelClick} />
            </div>
            <div className={styles.mobileLang}>
                {data.header.navigation_bar.navbarItems?.map((item, index) => {
                    if (item.dditem?.length !== 0) {
                        return (
                            <div aria-label={item.label} key={index}>

                                <Link className={styles.navItem} href="" onClick={(e) => {
                                    e.preventDefault;
                                    handledd();
                                }}
                                >{item.label}
                                    <span className={styles.arrowDown} style={{
                                        transform: open ? 'rotate(180deg)' : ''
                                    }}></span>
                                    {open && <DDMenu list={item.dditem} offsetX={0} offsetY={70} />}
                                </Link>
                            </div>
                        )
                    }
                })
                }
            </div>
            <div className={styles.burgerMenuLogo}>
                <Image src={modalState ? "/closebtn.svg" : "/burger-menu-icon.svg"} alt="menu"
                    width={24}
                    height={24}
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

