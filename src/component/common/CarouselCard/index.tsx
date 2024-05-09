import React from 'react';
import Link from 'next/link';
import styles from "./card.module.css";
import Image from 'next/image';

interface CardProps {
    image: string,
    title: string,
    description: string,
    link: string,
    toggleButton: boolean,
    buttonText: string,
}
const CarouselCard: React.FC<CardProps> = (props: CardProps) => {
    const { image, title, description, link, toggleButton, buttonText } = props;

    return (
        <div className={styles["carousel-card"]}>
            <div className={styles["carousel-card-image"]}>
                <Image src={image} alt={title} height={100} width={100} />
            </div>
            <div className={styles["carousel-card-content"]}>
                <h3 className={styles["carousel-card-title"]}>{title}</h3>
                <p className={styles["carousel-card-description"]}>{description}</p>
                {toggleButton && (
                    <Link href={link} legacyBehavior>
                        <a className={styles["carousel-card-button"]}>{buttonText}</a>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CarouselCard