"use client"

import React from 'react';
import Link from 'next/link';
import styles from "./card.module.css";
import Image from 'next/image';
import { isMobile } from '@util/index';

interface CardProps {
    image: string,
    title: string,
    description: string,
    url: string,
    toggleButton: boolean,
    buttonText: string,
    currentIndex: number,
    animate: boolean
}
const CarouselCard: React.FC<CardProps> = (props: CardProps) => {
    const { image, title, description, url, toggleButton, buttonText, currentIndex, animate } = props;
    const [animater, setAnimater] = React.useState("");
    const [starPath, setStarPath] = React.useState("url(/starvector.svg)");
    const [imageHeight, setImageHeight] = React.useState("calc((100vh / 964) * 166.67)");
    const [imageWidth, setImageWidth] = React.useState("calc((100vw / 1920) * 178.37)");

    React.useEffect(() => {
        if (isMobile()) {
            setStarPath("url(/starvectormobile.svg)")
            setImageWidth("auto");
            setImageHeight("auto");
        }
    }, []);

    React.useEffect(() => {
        setAnimater(animate ? "animation" : "");
    }, [currentIndex]);

    return (
        <div className={styles["carousel-card"] + " " + styles[`${animater}`]}>
            <div className={styles["carousel-card-image"]}>
                <div className={styles["card-image-outer"]} style={{ backgroundImage: starPath, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                    <div className={styles["card-image-inner"]}>
                        <Image src={image} alt={title} height={178.67} width={167} style={{ objectFit: "contain", width: `${imageWidth}`, height: `${imageHeight}` }} />
                    </div>
                </div>
            </div>
            <div className={styles["carousel-card-content"]}>
                <h3 className={styles["carousel-card-title"]}>{title}</h3>
                <p className={styles["carousel-card-description"]}>{description}</p>
                {toggleButton && (
                    <Link href={url} legacyBehavior>
                        <p className={styles["carousel-card-button"]}>{buttonText}</p>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CarouselCard