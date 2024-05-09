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
        <div className={styles["carousel"]}>
            <div className={styles["carousel-wrapper"]}>
                {toggleScrollButtonPosition && hideIndicator && (
                    <div className={styles["carousel-scroll-buttons"]}>
                        <button className={styles["carousel-scroll-button-top"]}></button>
                    </div>
                )}
                <div className={styles["carousel-header"]}>
                    <h2 className={styles["carousel-title"]}>{title}</h2>
                    {description && (
                        <p className={styles["carousel-description"]}>
                            {description}
                        </p>
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
                {toggleScrollButtonPosition && hideIndicator && (
                    <div className={styles["carousel-scroll-buttons"]}>
                        <button className={styles["carousel-scroll-button-bottom"]}></button>
                    </div>
                )}
            </ div>
        </div>
    )
}

export default Carousel;