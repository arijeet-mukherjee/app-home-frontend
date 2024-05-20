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
    const [imageHeight, setImageHeight] = React.useState(178.67);
    const [imageWidth, setImageWidth] = React.useState(167);

    React.useEffect(() => {
        if (isMobile()) {
            setStarPath("url(/starvectormobile.svg)")
            setImageWidth(128.99);
            setImageHeight(128.99);
        }
    }, []);

    React.useEffect(() => {
        // console.log(currentIndex, (currentIndex <= animate) && (currentIndex + 3 > animate), animate)
        setAnimater(animate ? "animation" : "");
    }, [currentIndex]);

    return (
        <div className={styles["carousel-card"] + " " + styles[`${animater}`]}>
            <div className={styles["carousel-card-image"]}>
                <div className={styles["card-image-outer"]} style={{ backgroundImage: starPath }}>
                    <div className={styles["card-image-inner"]}>
                        <Image src={image} alt={title} height={imageHeight} width={imageWidth} />
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