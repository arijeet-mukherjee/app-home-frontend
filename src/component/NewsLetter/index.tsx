import React from 'react'
import CardBox from '@component/cardBox'
import {useEffect} from 'react'

interface newsLetter {
    image: string,
    title: string,
    iconPosition: string,
    buttonText: string,
    buttonIcon: string,
    paddingLeftContent: string,
    inputBox:string,
    bulletPointImg: string,
    bulletPoints: Array<string>,
    goTo: string
}
const NewsLetter: React.FC<newsLetter> = ({image, title, iconPosition, buttonIcon, buttonText, goTo, paddingLeftContent, inputBox, bulletPointImg, bulletPoints }) => {
    return(
            <CardBox 
            image={image} 
            inputBox={inputBox} 
            bulletPointImg={bulletPointImg}
            bulletPoints={bulletPoints} 
            title={title}
            iconPosition={iconPosition}
            buttonIcon={buttonIcon}
            buttonText={buttonText}
            paddingLeftContent={paddingLeftContent}
            gridArea={{cardContent:'1/1', cardImage:'2/1'}}
            goTo={goTo}
            />
    )
}

export default NewsLetter;
