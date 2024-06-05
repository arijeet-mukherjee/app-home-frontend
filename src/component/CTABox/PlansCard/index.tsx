import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useEffect, useState } from 'react';
import { priceAfterDiscount } from '@util/index';


interface Plans {
    title: string;
    price: number;
    discountPercentage : number;
    buttonText: string;
    currency: string;
    currencySymbol: string;
    bulletPoint: string;
    ribbonText: string;
    period: string;
    hookStringOne: string;
    hookStringTwo: String;

}
interface PlansCardProps {
    cardTitle: string;
    plans: Plans[];
    bulletIcon: string;
}
//dummy data for the card


const PlansCard: FC<PlansCardProps> = ({
    cardTitle,
    plans,
    bulletIcon,
}) => {

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
            
            { (currentPlan.discountPercentage > 0)? `Get upto ${currentPlan.discountPercentage}% off ` :currentPlan.hookStringOne}
            </p>


            {currentPlan.hookStringTwo ? <p className={styles.originalPrice} style={{ textDecoration: "none" }}>{`${currentPlan.hookStringTwo}`}</p> :
            <p className={styles.originalPrice}>{`${currentPlan.currencySymbol}${currentPlan.price}`}</p> 
                
            }
            <div className={styles.discountPriceContainer}>
                <p className={styles.dicountedPrice}>{`${currentPlan.currencySymbol}${ priceAfterDiscount(currentPlan.price, currentPlan.discountPercentage) || currentPlan.price}`}</p>
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