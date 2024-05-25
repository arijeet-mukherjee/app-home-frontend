import React from 'react';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('./Card'));
import styles from "./quality.module.css";
import Image from 'next/image';
import Link from 'next/link';

interface qualityCard {
  heading?: Array<string>;
  content?: string;
  background?: {
    name: string;
    path: string;
  };
  button?: {
    name: string;
    url: string;
  };
  childCardProp?: {
    left?: {
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
    }[],
    right?: {
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
    }[]
  }
}

const QualityCard: React.FC<qualityCard> = React.memo(({ heading, content, background, button, childCardProp }) => {
  return (
    <div className={styles.homeQuality}>
      <div className={styles.intro}>
        {heading && 
        <div>  
        {heading?.map((heading, index)=>{
          return <h1 className={styles.introHeading} key={index} aria-label={heading}>{heading}</h1>
        })
        }
        </div>
        }
          <p className={styles.introContent} aria-label={content}>{content}</p>
          {button &&
            <div className={styles["home-button"]} role='button'>
              <Link href={button.url} tabIndex={0} legacyBehavior>
                <a className={styles["button"]}>
                  <span className={styles["button-text"]} aria-label={button.name}>{button.name}</span>
                  <span style={{display:'flex', alignItems:'center'}}>
                    <Image src="/arrowrightblack.svg" className={styles.buttonImage} alt="arrow right" width={19.43} height={7.77} />
                  </span>
                </a>
              </Link>
            </div>
          }
      </div>
      <div className={styles.cardContainer}>
        <img src={background?.path ? background.path : "/qualitybackground.svg"} alt={background?.name ? background.name : "background"} className={styles.background} />
        <div className={styles.subCardContainer}>
          <div className={styles.cards} style={{ alignSelf:'flex-start'}}>
            <Card heading={childCardProp?.left?.[0]?.heading} content={childCardProp?.left?.[0]?.content} image={childCardProp?.left?.[0]?.image} backgroundColor={childCardProp?.left?.[0]?.backgroundColor} textColor={childCardProp?.left?.[0]?.textColor} />
            <Card heading={childCardProp?.left?.[1]?.heading} content={childCardProp?.left?.[1]?.content} image={childCardProp?.left?.[1]?.image} backgroundColor={childCardProp?.left?.[1]?.backgroundColor} textColor={childCardProp?.left?.[1]?.textColor} />
          </div>
          <div className={styles.cards} style={{ alignSelf:'flex-end'}}>
            <Card heading={childCardProp?.right?.[0]?.heading} content={childCardProp?.right?.[0]?.content} image={childCardProp?.right?.[0]?.image} backgroundColor={childCardProp?.right?.[0]?.backgroundColor} textColor={childCardProp?.right?.[0]?.textColor} />
            <Card heading={childCardProp?.right?.[1]?.heading} content={childCardProp?.right?.[1]?.content} image={childCardProp?.right?.[1]?.image} backgroundColor={childCardProp?.right?.[1]?.backgroundColor} textColor={childCardProp?.right?.[1]?.textColor} button={childCardProp?.right?.[1]?.button}/>
          </div>
        </div>
      </div>
    </div>
  )
});

export default QualityCard;
