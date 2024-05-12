'use client'
import React, { useEffect } from 'react';
import styles from './styles.module.css'; // Import CSS module for styling
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CardBoxProps {
    image: string,
    title: string,
    description: string,
    iconPosition: string,
    buttonText: string,
    buttonIcon: string
};

const CardBox: React.FC<CardBoxProps> = (props: CardBoxProps) => {
    
    const [isMobileDevice, setIsMobileDevice] = useState<Boolean>(false);
    const [cardContentStyle, setCardContentStyle] = useState({});
    const [cardImageStyle, setCardImageStyle] = useState({});
    

    useEffect(()=>{
        const isMobile = () => {
            return typeof window !== 'undefined' && window.matchMedia("(max-width: 767px)").matches; 
        }

        const check = isMobile();

        if(check === true) {
            setCardContentStyle({ gridRow: 2, gridColumn: 1});
            setCardImageStyle({gridRow: 1 , gridColumn: 1});
            console.log("in true block")
        } else {
            setCardContentStyle({gridColumn : props.iconPosition == "left" ? 1 : 2 , gridRow: 1});
            setCardImageStyle({gridColumn : props.iconPosition == "left" ? 2 : 1, gridRow: 1});
            console.log("in else block")
        }
    },[])

    //const isMobileDevice = isMobile();
    

    const { image, title, description, iconPosition, buttonText } = props;
    return (
        <div className={styles["cardbox-card"]}  >
            <div className={styles["cardbox-content"]} style = {cardContentStyle} >
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
            <div className={styles["cardbox-image"]} style = {cardImageStyle}>
                <Image src={image} alt={title} width={329.61} height={307.29} />
            </div>
        </div>
    );
};
//// style={{ gridColumnStart: iconPosition === "left" ? 2 : 1 }}
{/* <CardBox
      title="Introduction"
      description="Welcome to SecDesk@Home - your shield against cybercriminals in an increasingly digitized world. As technology advances, so do the threats, and SecDesk couldn't stand idly by any longer. We've witnessed too many hard-earned dollars fall into the hands of cybercriminals, and enough is enough. It's time for a solution designed to protect individuals like you who are active online."
      image="/introduction.svg"
      iconPosition="left"
      buttonText="Know More"
      buttonIcon="/arrowrightwhite.svg"
      /> */}

export default CardBox;
