'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface dd {
    label: string;
    url: string;
}

interface navlink {
    label: string;
    url: string;
    dditem?: dd[];
}
interface MobileNavModalProps {
    list: navlink[];
    closeModal: Function;
}
const MobileNavModal: FC<MobileNavModalProps> = ({ list, closeModal }) => {
    return (
        <div className={styles.mobileNavModal}>
            <Image src="closebtn.svg"
                alt='close button'
                width={50}
                height={50}
                className={styles.closebtn}
                aria-label='close button'
                tabIndex={0}
                onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                }}
            />
            {
                list?.map((item, index) => {
                    return (
                        <div className={styles.menuItem} key={index}>
                            <Link href={item.url} aria-label={item.label}
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontWeight: "400px",
                                    fontFamily: 'DM Sans',
                                    fontSize: "30px",

                                }}
                            >{item.label}</Link>
                            {
                                item.dditem?.map((dditem, index) => {
                                    console.log(dditem, "this is speacial")
                                    return (

                                        <div className={styles.ddItem} key={index} aria-label={`${dditem.label}`}>
                                            <Link href={dditem.url}
                                            style={{
                                                textDecoration:"none",
                                                color:"white",
                                                fontFamily:"DM Sans"
                                            }}
                                            >{dditem.label}</Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }

        </div>
    );
};
export default MobileNavModal;