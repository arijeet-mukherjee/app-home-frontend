import styles from './styles.module.css';
import Image from 'next/image';
import Button from "@component/common/Button";
import { FC, useRef, useEffect, useState } from 'react';


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
interface PlansCardProps {

    cardTitle?: string;
    plans?: Plans[];
    bulletIcon: string;
    buttonColor: string;
    button_action_svg: string
}
//dummy data for the card 
const dummyTitle = "Choose Plan";
const dummyData = [
    {
        title: "Annual",
        price: 75.99,
        discountPrice: 40,
        buttonText: " Buy now",
        currency: "USD",
        currencySymbol: "$",
        bulletPoint: "100 GB of storage",
        ribbonText: "MOST POPULAR",
        period: "year"
    },
    {
        title: "Monthly",
        price: 45,
        discountPrice: 40,
        buttonText: "Get a loan",
        currency: "INR",
        currencySymbol: "₹",
        bulletPoint: "40 GB of storage",
        ribbonText: "MOST POPULAR",
        period: "month"
    }
]
const PlansCard: FC<PlansCardProps> = ({
    cardTitle = dummyTitle,
    plans = dummyData,
    bulletIcon,
    buttonColor,
    button_action_svg }) => {

    const [currentPlan, setCurrentPlan] = useState(plans[0]);

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) console.log(ref.current.getBoundingClientRect());

    }, []);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, plan: Plans) => {
        e.preventDefault();
        setCurrentPlan(plan);
    }

    return (
        <div className={styles.card} ref={ref}>
            <div className={styles.ribbon}>
                {currentPlan.ribbonText}
            </div>
            <h1>
                {cardTitle}
            </h1>
            <div className={styles.planPicker}>
                {plans.map((plan, index) => {
                    return (
                        <div className={currentPlan.title === plan.title ? styles.activePlan + " " + styles.allPlansTab : styles.allPlansTab} onClick={(e) => {
                            handleClick(e, plan);
                        }} key={index}>
                            {plan.title}
                        </div>
                    )
                })}

            </div>
            <p className={styles.discountText}>Save {100 - (Math.ceil((currentPlan.discountPrice / currentPlan.price) * 100))}% every month</p>


            <p className={styles.originalPrice}>{`${currentPlan.currencySymbol}${currentPlan.price}`}</p>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '20px',
                width: 'min-content',
            }}>
                <p className={styles.dicountedPrice}>{`${currentPlan.currencySymbol}${currentPlan.discountPrice}`}</p>
                <p>{`${currentPlan.currency} /${currentPlan.period}`}</p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 'calc((100vw / 1920 )*6)',

            }}>
                <Image src={bulletIcon} alt='bullet point'
                    width={30}
                    height={30}
                    className={styles.bulletIcon}></Image>
                <p>{`${currentPlan.bulletPoint}`}</p>
            </div>


            <Button
                label={currentPlan.buttonText}
                action_svg={button_action_svg}
                buttonColor={buttonColor}
                aria-label = {`${currentPlan.buttonText} button`}/>

        </div>
    )
}

export default PlansCard;