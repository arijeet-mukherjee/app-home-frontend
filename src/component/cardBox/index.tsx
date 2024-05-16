'use client'
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
interface CardBoxProps {
    image: string,
    title: string,
    description: string,
    iconPosition: string,
    buttonText: string,
    buttonIcon: string,
    paddingLeftContent: string
};

const CardBox: React.FC<CardBoxProps> = (props: CardBoxProps) => {

    const [isMobileDevice, setIsMobileDevice] = useState<Boolean>(false);
    const [cardContentStyle, setCardContentStyle] = useState({});
    const [cardImageStyle, setCardImageStyle] = useState({});
    const [cardGradient, setCardGradient] = useState({});

    const handleResize = () => {
        const isMobile = () => {
            return typeof window !== 'undefined' && window.matchMedia("(max-width: 767px)").matches;
        }
        const check = isMobile();

        if (check === true) {
            setCardContentStyle({ gridRow: 2, gridColumn: 1 });
            setCardImageStyle({ gridRow: 1, gridColumn: 1, background: "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)" });
        } else {
            setCardContentStyle({ gridColumn: props.iconPosition == "right" ? 1 : 2, gridRow: 1, paddingLeft : props.paddingLeftContent ? props.paddingLeftContent : 0});
            setCardImageStyle({ gridColumn: props.iconPosition == "right" ? 2 : 1, gridRow: 1 });
            setCardGradient({ background: props.iconPosition == "left" ? "linear-gradient(270.59deg, #FFFFFF 35.89%, #C7D5E0 79.41%)" : "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)", gridRow: 1 });
        }
    }

    useEffect(() => {

        window.addEventListener("resize", handleResize, false);
        const isMobile = () => {
            return typeof window !== 'undefined' && window.matchMedia("(max-width: 767px)").matches;
        }

        const check = isMobile();

        if (check === true) {
            setCardContentStyle({ gridRow: 2, gridColumn: 1 });
            setCardImageStyle({ gridRow: 1, gridColumn: 1, background: "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)" });
        } else {
            setCardContentStyle({ gridColumn: props.iconPosition == "right" ? 1 : 2, gridRow: 1, paddingLeft : props.paddingLeftContent ? props.paddingLeftContent : 0 });
            setCardImageStyle({ gridColumn: props.iconPosition == "right" ? 2 : 1, gridRow: 1 });
            setCardGradient({ background: props.iconPosition == "left" ? "linear-gradient(270.59deg, #FFFFFF 35.89%, #C7D5E0 79.41%)" : "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)", gridRow: 1 });
        }
    }, [])

    const { image, title, description, iconPosition, buttonText } = props;
    const imageWidth = 'calc((100vw / 1920) * 329.61'
    const imageHeight = 'calc((100vw / 1920) * 307.29'
    return (
        <div className={styles["cardbox-card"]} style={cardGradient} >
            <div className={styles["cardbox-content"]} style={cardContentStyle} >
                <h2 className={styles["cardbox-title"]}>{title}</h2>
                <p className={styles["cardbox-description"]}>{description}</p>
                <div className={styles["cardbox-button"]}>
                    <Link href="/about" legacyBehavior>
                        <a className={styles["button"]}>
                            <span className={styles["button-text"]}>{buttonText}</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightwhite.svg" alt="arrow right" width={39.83} height={23.31} />
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles["cardbox-image"]} style={cardImageStyle}>
                <Image src={image} alt={title} width={329.61} height={307.29} />
            </div>
        </div>
    );
};

export default CardBox;
