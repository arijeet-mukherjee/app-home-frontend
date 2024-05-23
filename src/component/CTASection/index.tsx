import styles from './styles.module.css';
import PlansCard from './PlansCard/index';
import Image from 'next/image';
import { FC } from 'react';


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
interface CTASectionProps {
    heading?: string;
    description?: string[];
    cardTitle?: string;
    plans?: Plans[];
    buttonColor: string;
    button_action_svg: string;
    bulletIcon: string;
}

const title = 'Secured Internet Browsing With Our Subscription Plan';
const detail = ['Don’t lose your money to online scammers.', 'Subscribe now to become more secure.', 'All newly added services FREE with the annual subscription.'];


const CTASection: FC<CTASectionProps> = ({
    heading = title,
    description = detail,
    cardTitle,
    plans,
    buttonColor,
    button_action_svg,
    bulletIcon,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {heading}
                </h1>
                <div className={styles.detailsContainer}>
                    {description.map((point, index) => {
                        return (
                            <div className={styles.bulletPoint} key={index}>
                                <Image
                                    width={20}
                                    height={20}
                                    src='/tickBulletPointBlue.svg'
                                    alt='bullet point'
                                    className={styles.bullet} />

                                <p  className={styles.bulletPoint}>
                                    {point}
                                </p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div>
                <PlansCard
                cardTitle={cardTitle}
                plans={plans}
                buttonColor={buttonColor}
                button_action_svg={button_action_svg}
                bulletIcon={bulletIcon}
                />
            </div>
        </div>
    );
}

export default CTASection;