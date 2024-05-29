'use client'
import React from 'react';
import Link from 'next/link';
import styles from "./hero.module.css";
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('@component/Header'));
interface HeroProps {
    // Your props goes here
    introduction: Array<string>;
    content: Array<string>;
    openModal: Function;
};

const Hero: React.FC<HeroProps> = React.memo(({ introduction, content, openModal }) => {
    //If either introduction or content length is not eqaul to 2, throw an error
    if (introduction.length !== 2 || content.length !== 2) {
        throw new Error("Introduction and content must be an array of two strings");
    }
    return (
        <div className={styles["hero"]}>
            {/* Your component content goes here */}
            <div className={styles["header"]}>
            {/* <Header openModal={openModal} /> */}
            </div>
            <div className={styles['heroBlock']}>
                <div className={styles["heroIntrocuction"]}>
                    <p style={{ margin: "0", padding: "0" }}>
                        <span className={styles['framer-text']}>
                            {introduction && introduction[0]}
                        </span>
                    </p>
                    <p style={{ margin: "0", padding: "0" }}>
                        <span className={styles['secondary-text']}>
                            {introduction && introduction[1]}
                        </span>
                    </p>
                </div>
                <div className={styles["heroContent"]}>
                    <p>
                        {content && content[0] ?

                            (
                                <>
                                    <span className={styles['about-text']}>{content[0].split(' ')[0] + " "}</span>
                                    <span className={styles['online-text']}>{content[0].split(' ').slice(1).join(' ')}</span>
                                </>
                            )

                            : <></>}
                    </p>
                    <p>

                        {content && content[1] ? (<>
                            <span className={styles['hear-back-text']}>{content[1].split('.')[0] + "."}</span><br />
                            <span className={styles['hear-back-text']}>{content[1].split('.').slice(1).join(' ') + "."}</span>
                        </>) : <></>}

                    </p>
                </div>
                {/** Write a button with text on left and icon on right */}
                <div className={styles["hero-button"]}>
                    <Link href="/about" legacyBehavior>
                        <a className={styles["button"]}>
                            <span className={styles["button-text"]}>Get In Touch</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightblack.svg" alt="arrow right" width={19.43} height={7.77} />
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles['emptyArea']}></div>
        </div>
    );
});

export default Hero;
