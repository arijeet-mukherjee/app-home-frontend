'use client'
import React from 'react'
import Image from 'next/image';
import styles from "./card.module.css"
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CardProps {
  heading?: string;
  content?: string;
  image?: {
    path: string;
    name: string;
  }
  backgroundColor?: string;
  textColor?: string;
  button?: {
    name1: string;
    name2?: string;
    url: string;
  }
};

const Card: React.FC<CardProps> = ({ heading, content, image, backgroundColor, textColor, button }) => {

  //Fixed screen not defined reference error
  const [breakPoint, setBreakPoint] = useState<number>(typeof window !== 'undefined' ? window.screen.width : 0);

  useEffect(() => {
    setBreakPoint(screen.width);
  }, [])

  return (
    <div className={styles.card} style={{ background: backgroundColor, color: textColor }}>
      {image &&
        <Image src={image?.path} alt={image?.name} width={62} height={62} className={styles.cardImage} />
      }
      <h3 aria-label={heading}>{heading}</h3>
      <p aria-label={content}>{content}</p>
      {button && <div className={styles["card-button"]} role='button'>
        <Link href={button.url} tabIndex={0} legacyBehavior>
          <a className={styles["button"]}>
            <span className={styles["button-text"]}>
              {button.name2 ? breakPoint >= 768 ? button.name1 : button.name2 : button.name1}
            </span>
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/arrowrightblack.svg" className={styles.arrowImg} alt="arrow right" width={19.43} height={7.77} />
            </span>
          </a>
        </Link>
      </div>}
    </div>
  )
};


export default Card;
