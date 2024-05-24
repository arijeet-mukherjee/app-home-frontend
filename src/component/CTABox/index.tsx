import React from 'react'
import CardBox from '@component/cardBox'
import PlansCard from './PlansCard';


interface Plans {
    title: string;
    price: number;
    discountPrice: number;
    buttonText: string;
    currency: string;
    currencySymbol: string;
    bulletPoint: string;
    ribbonText: string;
    period: string;

}
interface PlanCardProps {
    cardTitle?: string;
    plans?:Plans[];
    bulletIcon: string;
    buttonColor: string;
    button_action_svg: string
}
interface CTABox {
    image?: string,
    title: string,
    iconPosition: string,
    buttonText: string,
    buttonIcon: string,
    paddingLeftContent: string,
    inputBox: string,
    bulletPointImg: string,
    bulletPoints: Array<string>,
    goTo: string,
    childProps: PlanCardProps;
}
const CTABox: React.FC<CTABox> = ({ 
    image,
    title,
    iconPosition,
    buttonIcon,
    buttonText,
    goTo,
    paddingLeftContent,
    inputBox,
    bulletPointImg,
    bulletPoints,
    childProps }) => {

    return (
        <CardBox
    
            bulletPointImg={bulletPointImg}
            bulletPoints={bulletPoints}
            title={title}
            iconPosition={iconPosition}
            paddingLeftContent={paddingLeftContent}
            gridArea={{ cardContent: '1/1', cardImage: '2/1' }}
            paddingImageContent={'0px'}
            child={<PlansCard
                cardTitle={childProps.cardTitle}
                plans={childProps.plans}
                buttonColor={childProps.buttonColor}
                button_action_svg={childProps.button_action_svg}
                bulletIcon={childProps.bulletIcon}
            />}
        />
    )
}

export default CTABox;