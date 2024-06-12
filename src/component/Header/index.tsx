
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./styles.module.css";
import Button from '../common/Button';
import Link from 'next/link';
import DDMenu from '@component/common/DropdownMenu';
import { useAppSelector } from '@store/store';
import { isMobile } from '@util/index';


interface HeaderProps {
    openModal: Function;
    modalState: boolean
    headerData: any;
};

const Header: React.FC<HeaderProps> = ({ openModal, modalState, headerData }) => {
    const [logoSize, setLogoSize] = useState({
        height: 48,
        width: 176
    })
    const [open, setOpen] = useState(false);
    const globalLanguage = useAppSelector<any>(state => state.globalLanguage);
    const handledd = () => {
        setOpen(!open)
    }

    function handelClick(e: MouseEvent) {
        e.preventDefault();
    };

    useEffect(() => {
        if (isMobile()) {
            setLogoSize({
                height: 63,
                width: 125
            })
        }
    }, []);

    const headerStyle = {
        gridTemplateColumns: '3fr 1fr'
    }
    return (
        <nav className={styles.header} style={modalState ? {} : headerStyle} >
            <div>
                <Link href={headerData.navigation_bar.logo.href}>
                    <Image
                        src={headerData.navigation_bar.logo.src}
                        alt={headerData.navigation_bar.logo.alt}
                        width={logoSize.width}
                        height={logoSize.height}
                    />
                </Link>
            </div>
            <div className={styles.navbar}>
                {headerData.navigation_bar.navbarItems?.map((item: any, index: any) => {
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
                            >{globalLanguage.globalLanguage}
                                <span className={styles.arrowDown} style={{
                                    transform: open ? 'rotate(180deg)' : ''
                                }}></span>
                                {open && <DDMenu list={item.dditem} offsetX={0} offsetY={70} />}
                            </Link>
                        </div>)
                })
                }

                <Button label={headerData.navigation_bar.button.label} action_svg={headerData.navigation_bar.button.action_svg} hc={handelClick} />
            </div>
            {modalState && <div className={styles.mobileLang}>
                {headerData.navigation_bar.navbarItems?.map((item: any, index: any) => {
                    if (item.dditem?.length !== 0) {
                        return (
                            <div aria-label={item.label} key={index}>

                                <Link className={styles.navItem} href="" onClick={(e) => {
                                    e.preventDefault;
                                    handledd();
                                }}
                                >{globalLanguage.globalLanguage}
                                    <span className={styles.arrowDown} style={{
                                        transform: open ? 'rotate(180deg)' : ''
                                    }}></span>
                                    {open && <DDMenu list={item.dditem} offsetX={0} offsetY={55} />}
                                </Link>
                            </div>
                        )
                    }
                })
                }
            </div>}
            <div className={styles.burgerMenuLogo}>
                <Image src={modalState ? "/closebtn.svg" : "/burger-menu-icon.svg"} alt="menu"
                    height={35}
                    width={35}
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
