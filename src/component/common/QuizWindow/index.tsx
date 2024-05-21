'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from "./quizwindow.module.css";
import Image from 'next/image';

//props : [{questionId : { question : "What is Your name", answer : "sas", options : ["asasa", "Arijeet", "sdsd",...], message : "This is a demo", actionName : "Click on me"  }, ...... }]
interface QuizWindow {
    quizDetail: Array<Object>,

};

interface Question {
    answer: string;
};

interface QuestionObject {
    [key: string]: any;
}

const QuizWindow: React.FC<QuizWindow> = ({ quizDetail }) => {

    const [questions, setQuestions] = useState<Object[]>([]);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [optionchosen, setOptionchosen] = useState('');
    const [disabeOption, setDisableOption] = useState(false);
    const [isCorrectAnswer, setIsCorrectOption] = useState<any>(null);
    const [questionIds, setQuestionIds] = useState<String[]>([]);
    const scoreCalculator = () => { };
    const answerValidator = (questionObject: Question) => {
        return questionObject && (questionObject.answer.trim() === optionchosen.trim());
    };
    const optionClicked = (event: React.MouseEvent<HTMLButtonElement>, option: string) => {
        event.preventDefault();
        event.stopPropagation();
        const currentQuestion = questions[currentQuestionIndex] as Question;
        const currentQuestionObject = {
            answer: currentQuestion["answer"]
        };
        setOptionchosen(option);
        setDisableOption(true);
        const ifAnswerCorrect = answerValidator(currentQuestionObject);
        if (ifAnswerCorrect) {
            setCorrectAnswers(correctAnswers + 1);
            setIsCorrectOption(true);
        }
        else {
            setIsCorrectOption(false);
        }
    };
    const skipButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsCorrectOption(null);
        if (currentQuestionIndex !== (totalQuestions - 1)) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const checkScoreButtonClicked = () => { };

    useEffect(() => {
        quizDetail && setQuestions(quizDetail);
        quizDetail && setTotalQuestions(quizDetail.length);
        quizDetail && quizDetail.length > 0 ? setCurrentQuestionIndex(0) : setCurrentQuestionIndex(-1);
        quizDetail && quizDetail.forEach((quiz) => {
            const objectKeys = Object.keys(quiz);
            let questionId = [...questionIds, ...objectKeys];
            setQuestionIds(questionId);
        });
    }, []);

    const getCurrentQuestionNode = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        return <span>
            {question.question}
        </span>
    };

    const getCurrentQuestionOptionsNode = () => {
        const questionId = questionIds[currentQuestionIndex];
        const currentQuestion: QuestionObject = questions[currentQuestionIndex];
        const question = currentQuestion[questionId.toString()];
        const optionsLists = question.options;
        console.log(optionsLists, "sdsdsd");
        return <>
                {
                    optionsLists.map((value:String, key:Number)=>{
                        return <button key={Number(key)} value={value.toString()} onClick={(event)=>{optionClicked(event, value.toString())}}> {value} </button>
                    })
                }
             </>
    };

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
            <div className={styles["quiz-content"]}>
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
                            <div className={styles["question-message"]}></div>
                        }
                        {
                            optionchosen && optionchosen !== '' &&
                            <div className={styles["question-action"]}></div>
                        }
                    </div>

                }
                {
                    questions && questions.length > 0 &&

                    <div className={styles["questions-button"]}>
                        <button onClick={(event) => { skipButtonClicked(event) }} > {optionchosen && optionchosen !== '' ? 'Next' : 'Skip'} </button>
                    </div>
                }
            </div>
        </div>
    );
};

export default QuizWindow;
