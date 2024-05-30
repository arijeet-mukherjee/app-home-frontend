import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useEffect, useState } from 'react';


interface Plans {
    title?: string;
    price: number;
    discountPrice?: number;
    buttonText?: string;
    currency?: string;
    currencySymbol?: string;
    bulletPoint?: string;
    ribbonText?: string;
    period?: string;
    hookString?: string;
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
           
           <p className={styles.discountText}>
            {currentPlan.discountPrice? `Save ${100 - (Math.ceil((currentPlan.discountPrice / currentPlan.price) * 100))}% every month`: 'Security that is Value for Money'}
            </p>


            {currentPlan.discountPrice?<p className={styles.originalPrice}>{`${currentPlan.currencySymbol}${currentPlan.price}`}</p>:
                <p className={styles.originalPrice} style={{ textDecoration : "none"}}>Say Bye to Threats at</p>
            }
            <div className={styles.discountPriceContainer}>
                <p className={styles.dicountedPrice}>{`${currentPlan.currencySymbol}${currentPlan.discountPrice || currentPlan.price}`}</p>
                <p>{`${currentPlan.currency} /${currentPlan.period}`}</p>
            </div>
            <div className={styles.bulletPointContainer}>
                <Image src={bulletIcon} alt='bullet point'
                    width={30}
                    height={30}
                    className={styles.bulletIcon}></Image>
                <p>{`${currentPlan.bulletPoint}`}</p>
            </div>


            <div className={styles["cta-button"]}>
                    <Link href="/about" legacyBehavior>
                        <a className={styles["button"]}>
                            <span className={styles["button-text"]}>{currentPlan.buttonText}</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightblack.svg" alt="arrow right" width={19.43} height={7.77} />
                            </span>
                        </a>
                    </Link>
                </div>

        </div>
    )
}

export default PlansCard;