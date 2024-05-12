import React from 'react';
import Link from 'next/link';
import styles from "./carousel.module.css";
import Image from 'next/image';
import CarouselCard from '@component/common/CarouselCard';

interface CardProps {
    image: string,
    title: string,
    description: string,
    link: string,
    toggleButton: boolean,
    buttonText: string,
}

interface CarouselProps {
    title: string,
    description: string,
    toggleScrollButtonPosition: boolean,
    hideIndicator: boolean,
    cardProps: CardProps[],
};

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    const { title, description, toggleScrollButtonPosition, hideIndicator, cardProps } = props;

    return (
        <div className={styles["carousel-wrapper"]}>
            <div className={styles["carousel-header"]}>
                <div className={styles["carousel-subheader"]}>
                    <h2 className={styles["carousel-title"]}>{title}</h2>
                    {description && (
                        <p className={styles["carousel-description"]}>
                            {description}
                        </p>
                    )}
                </div>
                {toggleScrollButtonPosition && (
                    <div className={styles["carousel-scroll-buttons-top"]}>
                        <button className={styles["carousel-scroll-button-top-prev"]}>l</button>
                        <button className={styles["carousel-scroll-button-top-next"]}>r</button>
                    </div>
                )}
            </div>
            <div className={styles["carousel-content"]}>
                {cardProps && cardProps.map((cardProp: CardProps, index: number) => {
                    return (
                        <div className={styles["carousel-card-wrapper"]} key={index}>
                            <CarouselCard {...cardProp} />
                        </div>
                    )
                })}
            </ div>
            {toggleScrollButtonPosition && (
                <div className={styles["carousel-scroll-buttons-bottom"]}>
                    <button className={styles["carousel-scroll-button-bottom"]}>bottom</button>
                </div>
            )}
        </ div>
    )
}

export default Carousel;