'use client';
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useState } from 'react';
import DDMenu from '../../common/DropdownMenu/index';

const list = ["ENG", "SPN", "DTC"];

interface dd {
    label: string;
    url: string;
}

interface navlink {
    label: string;
    url: string;
    dditem?: dd[];
}
interface NavBarItemProps {
    list: navlink[];
}
const NavBarItem: FC<NavBarItemProps> = ({ list }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <div className={styles.navItemContainer} aria-label='site navigation' tabIndex={0}>
            {
                list?.map((item, index) => {
                    if (item.dditem?.length === 0) {
                        return (
                            <div aria-label={item.label} key={index}>
                                <Link className={styles.navItem} href={item.url} >{item.label}</Link>
                            </div>
                        )
                    }
                    return (
                        <div aria-label={item.label} key={index}>

                            <Link className={styles.navItem} href="" onClick={(e) => {
                                e.preventDefault;
                                handleClick();
                            }}

                            >{item.label}
                                <span className={styles.arrowDown}></span>
                                {open && <DDMenu list={item.dditem} offsetX={0} offsetY={80} />}

                            </Link>

                        </div>
                    )

                })
            }

        </div>
    );
};

export default NavBarItem;