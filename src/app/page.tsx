'use client'
import React, { useState } from "react";
import data from '../data.json';
import styles from './app.module.css';
import Hero from "@component/Hero";
import Shield from "@component/common/Shield";
import CardBox from "@component/cardBox";
import MobileNavModal from "@component/MobileNavModal";
import CardQuality from "@component/cardQuality";
import Carousel from "@component/Carousel";
import NewsLetter from "@component/NewsLetter";
import Footer from "@component/Footer";
import { isMobile } from "@util/index";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const [carouselStyle, setCarouselStyle] = useState<any>({ backgroundImage: "url(/worldmap.svg)", backgroundSize: "contain", backgroundRepeat: "no-repeat" });
  React.useEffect(() => {
    if (isMobile()) {
      setCarouselStyle({ backgroundImage: "url(/worldmap.svg)", background: "linear-gradient(to bottom, #0A041F 30%, transparent 30%)" });
    }
  }, [])
  return (
    <div className={styles["container"]}>
      {modalOpen && <MobileNavModal closeModal={openModal} list={data.header.navigation_bar.navbarItems} />}


      <Hero
        introduction={["Internet can be a dangerous place,", "Do you sometimes worry"]}
        content={["About the online scams?", "We hear these worries a lot from our clients, parents, teenagers, and friends outside IT industry, we could go on and on. Security is difficult and people from all layers of security struggle with these questions."]}
        openModal={openModal}
      />

      <Shield top={105} right={190} />
      <div className={styles["cardBoxFirst"]}>
        <CardBox
          title={data.introduction.title}
          description={data.introduction.description}
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
          image={data.jointheMovement.image}
          iconPosition={data.jointheMovement.image_position}
          buttonText={data.jointheMovement.button_name}
          buttonIcon={data.jointheMovement.button_icon}
          paddingLeftContent={data.jointheMovement.paddingLeftContent}
          paddingImageContent={data.jointheMovement.paddingImageContent}
        />
      </div>
      <CardQuality
        heading={data.qualityCard.heading}
        content={data.qualityCard.content}
        button={data.qualityCard.button}
        childCardProp={data.qualityCard.childCardProp}
        background={data.qualityCard.background}
      />
      <div className={styles["carousel-container-1"]} style={carouselStyle}>
        <Carousel {...data.carouselCurrentSubscription} />
      </div>
      <div className={styles["carousel-container-2"]} >
        <Carousel {...data.carouselUpcomingSubscription} />
      </div>
      <div className={styles["cardBoxRemain"]}>
        <NewsLetter
          title={data.newsLetter.title}
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
      </div>
      <Footer
        branding={data.footer.branding}
        logo={data.footer.logo}
        background={data.footer.background}
        contents={data.footer.content}
        socialMedias={data.footer.socialMedia} />
    </div>
  );
}
