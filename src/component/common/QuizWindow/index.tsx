'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./quizwindow.module.css";
import Image from 'next/image';
import ThreatScorecard from '@component/threatScorecard';
interface QuizWindow {
    quizDetail: Array<Object>;
};

interface Question {
    answer: string;
};
interface QuestionObject {
    [key: string]: any;
}

type CategoryStats = {
    correctCount: number;
    totalCount: number;
};

const getLabel = (index: number): string => {
    return String.fromCharCode(97 + index); // 97 is the ASCII code for 'a'
  };


const QuizWindow: React.FC<QuizWindow> = ({ quizDetail }) => {

    const [questions, setQuestions] = useState<Object[]>([]);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [optionchosen, setOptionchosen] = useState<String>('');
    const [optionActiveIndex, setOptionActiveIndex] = useState<number | null>(null);
    const [disabeOption, setDisableOption] = useState(false);
    const [isCorrectAnswer, setIsCorrectOption] = useState<any>(null);
    const [questionIds, setQuestionIds] = useState<String[]>([]);
    const [optionButtonClicked, setOptionButtonClicked] = useState<boolean>(false);
    const [scoreDashboard, setScoreDashBoard] = useState<boolean>(false);
    const [categoryScores, setCategoryScores] = useState<{ [key: string]: CategoryStats }>({});
    const [totalCorrectScore, setTotalCorrectScore] = useState<number>(0);


    const scoreCalculator = (event: React.MouseEvent<HTMLButtonElement>) => {
        setTotalCorrectScore((correctAnswers / quizDetail.length) * 100);
        setScoreDashBoard(true);
    };


    const answerValidator = (questionObject: Question, option: string) => {
        return questionObject.answer && (questionObject.answer.trim() === option.trim());
    };


    const optionClicked = (event: React.MouseEvent<HTMLButtonElement>, option: string, optionIndex: number) => {
        event.preventDefault();
        event.stopPropagation();
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        const currentQuestionObject = {
            answer: question.answer
        };

        setOptionchosen(option);
        setDisableOption(true);
       
        categoryScores[question.category].totalCount += 1;


        const ifAnswerCorrect = answerValidator(currentQuestionObject, option);
        if (ifAnswerCorrect) {
            setCorrectAnswers(correctAnswers + 1);
            categoryScores[question.category].correctCount += 1;
            setIsCorrectOption(true);
        }
        else {
            setIsCorrectOption(false);

        }
        setCategoryScores({ ...categoryScores, ...categoryScores });
    };
    const skipButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsCorrectOption(null);
        setOptionchosen("");
        if (currentQuestionIndex !== (totalQuestions - 1)) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setDisableOption(false);
        }
    };




    useEffect(() => {
        quizDetail && setQuestions(quizDetail);
        quizDetail && setTotalQuestions(quizDetail.length);
        quizDetail && quizDetail.length > 0 ? setCurrentQuestionIndex(0) : setCurrentQuestionIndex(-1);
        let questionId: string[] = [];
        const scores: { [key: string]: CategoryStats } = {};
        
        quizDetail && quizDetail.forEach((quiz) => {
            const objectKeys = Object.keys(quiz);
            questionId.push(objectKeys.toString());
        });

        quizDetail.forEach((quiz) => {
            const categoryDetails = Object.values(quiz)[0].category;
            if (!scores[categoryDetails]) {
                scores[categoryDetails] = { correctCount: 0, totalCount: 0 };
            }
        })

        setCategoryScores(scores);
        setQuestionIds([...questionId]);

    }, []);


    const getCurrentQuestionNode = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        return (<><span>{currentQuestionIndex + 1 + "."}</span> <p className={styles["space"]}></p><span> 
            {question.question}
        </span></>)
    };

    const getCurrentQuestionOptionsNode = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        const optionsLists = question.options;
        return <>
            {
                optionsLists.map((value: String, index: number) => {
                    return <div key={index}>
                        <button className={`${styles.questionoption} ${optionchosen === value && isCorrectAnswer ? styles.questionoptionclicked : ""}  ${optionchosen && value === optionchosen && optionchosen !== isCorrectAnswer ? styles.incorrect : ''}`} disabled={disabeOption && optionchosen !== value} key={index} value={value.toString()} onClick={(event) => { optionClicked(event, value.toString(), Number(index)) }}>{`${getLabel(index)}.) ${value}`} </button>
                    </div>
                })
            }
        </>
    };

    const getDisplayMessage = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        return <>
            {disabeOption ? question.message : ""}

        </>
    }

    const getQuestionAction = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        return <>
            {disabeOption ? question.actionName : ""}

        </>
    }

    return (
        <div className={styles["quiz-window"]}>
            <div className={styles["quiz-header"]}>
                <div className={styles["quiz-header-left"]}>
                    <div className={styles["quiz-header-left-design"]}></div>
                    <div className={styles["quiz-header-left-design"]}></div>
                    <div className={styles["quiz-header-left-design"]}></div>
                </div>
                <div className={styles["quiz-header-right"]}>
                    <div className={styles["quiz-header-right-design"]}></div>
                </div>
            </div>
            {!scoreDashboard ? (<div className={styles["quiz-content"]}>
                {
                    questions && questions.length > 0 &&

                    <div className={styles["questions-section"]}>
                        <div className={styles["question-text"]}>
                            {
                                quizDetail && quizDetail.length > 0 && getCurrentQuestionNode()
                            }
                        </div>
                        <div className={styles["question-options"]}>
                            {
                                quizDetail && quizDetail.length > 0 && getCurrentQuestionOptionsNode()
                            }
                        </div>
                        {
                            optionchosen && optionchosen !== '' &&
                            <div className={styles["question-message"]}>
                                <div className={styles["question-logo"]}>
                                    <Image src="/micrologo.svg" alt={"sd"} width={26.28} height={26.28} />
                                </div>
                                <div className={styles["question-description"]}>{getDisplayMessage()}</div>
                            </div>
                        }
                        {
                            optionchosen && optionchosen !== '' &&
                            <div className={styles["question-action"]}>
                                <Link href="/about" legacyBehavior>
                                    <a className={styles["button"]}>
                                        <span className={styles["button-text"]}>{getQuestionAction()}</span>
                                        <span className={styles["button-icon"]}>
                                            <Image src="/arrowrightblack.svg" alt="arrow right" width={20} height={8} />
                                        </span>
                                    </a>
                                </Link>
                            </div>
                        }
                    </div>

                }
                {
                    questions && questions.length > 0 &&

                    <div className={styles["questions-button"]} style={{ display: currentQuestionIndex === (totalQuestions - 1) ? 'none' : 'flex' }}>
                        <button onClick={(event) => { skipButtonClicked(event) }} > {optionchosen && optionchosen !== '' ? 'Next' : 'Skip'} </button>
                    </div>
                }
                {
                    questions && questions.length > 0 &&

                    <div className={styles["questions-button"]} style={{ display: currentQuestionIndex === (totalQuestions - 1) ? 'flex' : 'none' }}>
                        <button onClick={(event) => { scoreCalculator(event) }} > {optionchosen && optionchosen !== '' ? 'Check Your Score' : 'Skip'} </button>
                    </div>
                }
            </div>) : (<div className={styles["quiz-scorecontent"]}><ThreatScorecard
                categoryScores = {categoryScores}
                totalCorrectScore = {totalCorrectScore}
            /></div>)}
        </div>
    );
};

export default QuizWindow;
