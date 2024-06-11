'use client'
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@store/store';
import { setQuizRefreshState } from '@store/quizRefreshSlice';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(() => import('@component/common/ProgressBar'));
const VulnerabilityThreat = dynamic(() => import('@component/common/VulnerabilityThreat'));

type CategoryStats = {
    correctCount: number;
    totalCount: number;
};

interface ThreatScorecardProps {
    categoryScores: { [key: string]: CategoryStats };
    totalCorrectScore: number,
    resetQuizState: any
    setGetCoupon : Function;
};

const getCoupon = (setGetCoupon: Function) => {
    setGetCoupon(true);
}

const calculatePercentage = (stats: CategoryStats) => {
    return ((stats.correctCount / stats.totalCount) * 100).toFixed(0);
};

const ThreatScorecard: React.FC<ThreatScorecardProps> = (props: ThreatScorecardProps) => {

    const isQuizRefreshed  = useAppSelector(state => state.refreshQuiz)
    const dispatch = useAppDispatch();

    let { categoryScores, totalCorrectScore, resetQuizState, setGetCoupon } = props;
    let fixedtotalCorrectScore = Number(totalCorrectScore.toFixed(0));
    const remainingThreat = 100 - fixedtotalCorrectScore;
    const restartQuiz = () => {
        const newQuizState = {...isQuizRefreshed, quizRefresh : !isQuizRefreshed.quizRefresh}
        dispatch(setQuizRefreshState(newQuizState));
        resetQuizState()
    }
    
    return (
        <div className={styles["scorecard-section"]}  >
            <div className={styles["vunerability-section"]} >
                <div className={styles["vunerability-percentage"]}>
                    <div className={styles["vunerability-header"]}>
                        <div className={styles["vunerability-title"]}>Vulnerability Percentage</div>
                        <div className={styles["vunerability-heading"]}>
                            <div>#</div>
                            <div>Threat</div>
                            <div>Security Level</div>
                            <div>%</div>
                        </div>
                    </div>
                    <div className={styles["vunerability-report"]}>
                        {Object.keys(categoryScores).map((category, index) => {
                            let formattedIndex = (index + 1).toString().padStart(2, '0')
                            return (
                                <div key={category}>
                                    <VulnerabilityThreat index={formattedIndex} name={category} percent={Number(calculatePercentage(categoryScores[category]))} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles["discount-coupon-section"]}>
                    <div className={styles["discount-section"]}>
                        <div className={styles["discount-percent"]}>50%</div>
                        <div className={styles["discount-text"]}>Discount</div>
                    </div>
                    <div className={styles["couponcode-message-section"]}>
                        <div className={styles["message-section"]}>
                            <div className={styles["message-profilephoto"]} style={{ borderRadius: "50%" }}>
                                <Image src="/profilepicture.jpeg" className={styles.makeImageCircular} alt="arrow right" width={34.43} height={34.43} />
                            </div>
                            <div className={styles["message-name"]}>
                                <div className={styles["message-username"]}>Youri Van Der Zwart</div>
                                <div className={styles["message-forcustomer"]}>Hi, you did great. Want us to help you?</div>

                            </div>
                        </div>
                        <div className={styles["couponcode-section"]}>
                            <div className={styles["couponcode"]}>Coupon Code : SEC****4***</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["threat-section"]}>
                <div className={styles["threatcalculator-section"]}>
                    <div className={styles["threatcalculator-text"]}>
                        <div className={styles["threatcalculator-title"]}>Threat Calculator</div>
                        <div className={styles["riskstatus"]}>Your Device is at risk</div>
                        <div className={styles["threatscore"]}>Score:{fixedtotalCorrectScore}%</div>
                        <div className={styles["totalthreat"]}>Total Threat: {remainingThreat}%</div>
                    </div>
                    <div className={styles["progressbar"]}>
                        <ProgressBar value={fixedtotalCorrectScore} />
                    </div>
                </div>
                <div className={styles["getcouponrefresh-section"]}>
                    <div className={styles["getcoupon-button"]} onClick={()=>getCoupon(setGetCoupon)}>
                        <a>
                            <span className={styles["button-text"]}>Get Coupon Code</span>
                            <span className={styles["button-icon"]}>
                                <Image src="/arrowrightwhite.svg" alt="arrow right" width={39.83} height={23.31} />
                            </span>
                        </a>
                    </div>
                    <div className={styles["refresh-button"]} onClick={restartQuiz}>
                        <a>
                            <span className={styles["button-icon"]}>
                                <Image src="/refreshicon.svg" alt="arrow right" width={39.83} height={23.31} />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ThreatScorecard;
