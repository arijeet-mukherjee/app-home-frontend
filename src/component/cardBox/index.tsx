'use client'
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { isMobile } from '@util/index';
interface CardBoxProps {
    image: string,
    title: string,
    description?: string,
    iconPosition: string,
    buttonText: string,
    buttonIcon: string,
    paddingLeftContent: string,
    paddingImageContent?:string
    inputBox?: string,
    bulletPointImg?: string,
    bulletPoints?: Array<string>,
    gridArea?: {
        cardContent: string,
        cardImage: string,
    }
    goTo?:string
};

const CardBox: React.FC<CardBoxProps> = (props: CardBoxProps) => {
    
    const [isMobileDevice, setIsMobileDevice] = useState<Boolean>(false);
    const [cardContentStyle, setCardContentStyle] = useState({});
    const [cardImageStyle, setCardImageStyle] = useState({});
    const [cardGradient, setCardGradient] = useState({});
    const [imageHeight, setImageHeight] = useState(329.61);
    const [imageWidth, setImageWidth] = useState(307.29);
    
    
    const [email, setEmail] = useState('');
    const inputEmail = useRef<HTMLInputElement>(null!);
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function handelInput(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value);
        if(inputEmail.current){
            if(!emailRegex.test(email)){
                inputEmail.current.style.outline = "red solid";
            }
            else{
                inputEmail.current.style.outline = "black solid";
            }
        }
    }
    
    const handelSubmit = ()=>{

        if(emailRegex.test(email)){
        alert(email + " created successfully");
        window.open(`${props.goTo}`, '_self');
        }
        else{
            alert("Please enter a valid email address");
        }
    }
        
    
    useEffect(() => {        

        const check = isMobile();

        if (check === true) {
            setImageWidth(240);
            setImageHeight(191);

            if(props.gridArea) {
                setCardContentStyle({gridArea : props.gridArea.cardContent});
                setCardImageStyle({ gridArea: props.gridArea.cardImage, background: "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)" });
            }
            else{
                setCardContentStyle({ gridRow: 2, gridColumn: 1 });
                setCardImageStyle({ gridRow: 1, gridColumn: 1, background: "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)" });
            }
        } else {
            setCardContentStyle({ gridColumn: props.iconPosition == "right" ? 1 : 2, gridRow: 1, paddingLeft : props.paddingLeftContent ? props.paddingLeftContent : 0 });
            setCardImageStyle({ gridColumn: props.iconPosition == "right" ? 2 : 1, gridRow: 1, paddingLeft : props.paddingImageContent ? props.paddingImageContent : 0 });
            setCardGradient({ background: props.iconPosition == "left" ? "linear-gradient(270.59deg, #FFFFFF 35.89%, #C7D5E0 79.41%)" : "linear-gradient(108.31deg, #FFFFFF 34.81%, #C7D5E0 78.11%)", gridRow: 1 });        
        }
    }, [])

    const { image, title, description, iconPosition, buttonText, inputBox, bulletPointImg, bulletPoints } = props;
    return (
        
        <div className={styles["cardbox-card"]} style={cardGradient} >
        <div className={styles["cardbox-content"]} style={cardContentStyle} >
            <h2 className={styles["cardbox-title"]}>{title}</h2>

            {bulletPoints?.length
             ?
             <div style={{display:'flex', flexDirection:'column', gap:'10px', alignItems:'flex-start', margin:'10px 0'}}>

                {bulletPoints.map((points, index) => {
                    return (
                        <div key={index} style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                            {bulletPointImg && <Image src={bulletPointImg} alt='bullet point' width={20} height={20} />}
                            <p>{points}</p>
                        </div>
                    )
                })}
                </div>
                :
                <p className={styles["cardbox-description"]}>{description}</p>
            }

            {inputBox ? <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr', gridColumnGap: '10px'}}>
                <input type="email" name='email' placeholder={inputBox} ref={inputEmail} value={email} onChange={handelInput} style={{ background: '#D9D9D9', border: 'none', paddingLeft: '25px' }} />
                <div className={styles["cardbox-button"]} onClick={handelSubmit}>
                    
                        <a className={styles["button"]}>
                            <span className={styles["button-text"]}>{buttonText}</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightwhite.svg" alt="arrow right" width={39.83} height={23.31} />
                            </span>
                        </a>
                </div>
            </div> :
                <div className={styles["cardbox-button"]} onClick={handelSubmit}>
                    
                        <a className={styles["button"]}>
                            <span className={styles["button-text"]}>{buttonText}</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightwhite.svg" alt="arrow right" width={39.83} height={23.31} />
                            </span>
                        </a>
                </div>
            }
        </div>
        <div className={styles["cardbox-image"]} style={cardImageStyle}>
            <Image src={image} alt={title} width={imageWidth} height={imageHeight} />
        </div>
    </div>
    );
};

export default CardBox;
