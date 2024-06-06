'use client'
import React, { useState, useRef, useCallback } from "react";
import dynamic from 'next/dynamic';
import data from '../data.json';
import styles from './app.module.css';
import useOnScreen from "@util/useOnScreen";
import Hero from "@component/Hero";
import Shield from "@component/common/Shield";
const CardBox = dynamic(() => import('@component/cardBox'), {
  loading: () => <p>Loading.....</p>
});
const MobileNavModal = dynamic(() => import('@component/MobileNavModal'));
const CardQuality = dynamic(() => import('@component/cardQuality'), { ssr: false });
const Carousel = dynamic(() => import('@component/Carousel'), { ssr: false });
const CTABox = dynamic(() => import('@component/CTASection'), { ssr: false });
const NewsLetter = dynamic(() => import('@component/NewsLetter'), { ssr: false });
const Footer = dynamic(() => import('@component/Footer'), { ssr: false });
const TawkChatWidget = dynamic(() => import('@component/common/TawkChat'), { ssr: false });
import { isMobile } from "@util/index";
import QuizWindow from "@component/common/QuizWindow";

export default function Home() {
  const refCardQuality = useRef<HTMLDivElement>(null);
  const isVisibleCardQuality = useOnScreen(refCardQuality, '0px');

  const refCarouselCurrentSubscription = useRef<HTMLDivElement>(null);
  const isVisibleCarouselCurrentSubscription = useOnScreen(refCarouselCurrentSubscription, '50px');

  const refCarouselUpcomingSubscription = useRef<HTMLDivElement>(null);
  const isVisibleCarouselUpcomingSubscription = useOnScreen(refCarouselUpcomingSubscription, '70px');

  const refCTABox = useRef<HTMLDivElement>(null);
  const isVisibleCTABox = useOnScreen(refCTABox, '120px');

  const refQuizWindow = useRef<HTMLDivElement>(null);
  const isVisibleQuizWindow = useOnScreen(refQuizWindow, '100px');


  const refNewsLetter = useRef<HTMLDivElement>(null);
  const isVisibleNewsLetter = useOnScreen(refNewsLetter, '150px');

  const refFooter = useRef<HTMLDivElement>(null);
  const isVisiblefFooter = useOnScreen(refFooter, '200px');

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => {
    setModalOpen(prevModalOpen => !prevModalOpen);
  }, []);
  const [carouselStyle, setCarouselStyle] = useState<any>({ backgroundImage: "url(/worldmap.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" });
  React.useEffect(() => {
    if (isMobile()) {
      setCarouselStyle({ backgroundImage: "url(/worldmap.svg)", background: "linear-gradient(to bottom, #0A041F 30%, transparent 30%)" });
    }
  }, [])
  return (
    <div className={styles["container"]}>  
      {modalOpen && <MobileNavModal  modalState={modalOpen} closeModal={openModal} list={data.header.navigation_bar.navbarItems} />}
      <Hero
        introduction={["Internet can be a dangerous place,", "Do you sometimes worry"]}
        content={["About the online scams?", "We hear these worries a lot from our clients, parents, teenagers, and friends outside IT industry, we could go on and on. Security is difficult and people from all layers of security struggle with these questions."]}
        openModal={openModal}
        modalState={modalOpen}
      />

      <Shield top={105} right={190} />
      <div className={styles["cardBoxFirst"]}>
        <CardBox
          title={data.introduction.title}
          description={data.introduction.description}
          background={data.introduction.background}
          image={data.introduction.image}
          iconPosition={data.introduction.image_position}
          buttonText={data.introduction.button_name}
          buttonIcon={data.introduction.button_icon}
          paddingLeftContent={data.introduction.paddingLeftContent}
          paddingImageContent={data.introduction.paddingImageContent}
        />
      </div>
      <div className={styles["cardBoxRemain"]}>
        <CardBox
          title={data.yourShield.title}
          description={data.yourShield.description}
          background={data.yourShield.background}
          image={data.yourShield.image}
          iconPosition={data.yourShield.image_position}
          buttonText={data.yourShield.button_name}
          buttonIcon={data.yourShield.button_icon}
          paddingLeftContent={data.yourShield.paddingLeftContent}
          paddingImageContent={data.yourShield.paddingImageContent}
        />
        <CardBox
          title={data.jointheMovement.title}
          description={data.jointheMovement.description}
          background={data.jointheMovement.background}
          image={data.jointheMovement.image}
          iconPosition={data.jointheMovement.image_position}
          buttonText={data.jointheMovement.button_name}
          buttonIcon={data.jointheMovement.button_icon}
          paddingLeftContent={data.jointheMovement.paddingLeftContent}
          paddingImageContent={data.jointheMovement.paddingImageContent}
        />
      </div>
      <div ref={refCardQuality} className={styles["whiteBackground"]}>
        {
          isVisibleCardQuality && <CardQuality
            heading={data.qualityCard.heading}
            content={data.qualityCard.content}
            button={data.qualityCard.button}
            childCardProp={data.qualityCard.childCardProp}
            background={data.qualityCard.background}
          />
        }
      </div>
      <div className={styles["carousel-container-1"] + " " + styles["cardBoxRemain"]} style={carouselStyle} ref={refCarouselCurrentSubscription}>
        {
          isVisibleCarouselCurrentSubscription && <Carousel {...data.carouselCurrentSubscription} />
        }
      </div>
      <div className={styles["carousel-container-2"] + " " + styles["cardBoxRemain"]} ref={refCarouselUpcomingSubscription}>
        {
          isVisibleCarouselUpcomingSubscription && <Carousel {...data.carouselUpcomingSubscription} />
        }
      </div>

      <div ref={refQuizWindow} className={styles["quizCard"]} >
        <div className={styles["quizName"]}><span>Huge discounts are waiting for you on the other side!</span></div>{
          isVisibleQuizWindow && <QuizWindow quizDetail={data.quiz} />
        }
      </div>

      <div ref={refCTABox} className={styles["cardBoxRemain"]}>
        {isVisibleCTABox && <CTABox
          title={data.CallToAction.heading}
          iconPosition={data.newsLetter.image_position}
          paddingLeftContent={data.newsLetter.paddingLeftContent}
          bulletPointImg={data.newsLetter.bulletPointImg}
          bulletPoints={data.CallToAction.description}
          goTo={data.newsLetter.goTo}
          childProps={{
            cardTitle: data.CallToAction.cardTitle,
            plans: data.CallToAction.plans,
            bulletIcon: data.CallToAction.bulletIcon,
          }} />
        }
      </div>

      <div ref={refNewsLetter} className={styles["cardBoxRemain"]}>
        {
          isVisibleNewsLetter && <NewsLetter
            title={data.newsLetter.title}
            background={data.newsLetter.background}
            image={data.newsLetter.image}
            iconPosition={data.newsLetter.image_position}
            buttonText={data.newsLetter.button_name}
            buttonIcon={data.newsLetter.button_icon}
            paddingLeftContent={data.newsLetter.paddingLeftContent}
            inputBox={data.newsLetter.inputBox}
            bulletPointImg={data.newsLetter.bulletPointImg}
            bulletPoints={data.newsLetter.bulletPoints}
            goTo={data.newsLetter.goTo}
          />
        }
      </div>
      <div ref={refFooter}>
        {
          isVisiblefFooter &&
          <Footer
            branding={data.footer.branding}
            logo={data.footer.logo}
            background={data.footer.background}
            contents={data.footer.content}
            socialMedias={data.footer.socialMedia} />
        }
      </div>
      <TawkChatWidget />
    </div>
    
  );
}
