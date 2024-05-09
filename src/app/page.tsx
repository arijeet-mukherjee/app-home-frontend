import Image from "next/image";
import Hero from "@component/Hero";
import Shield from "@component/common/Shield";

import Carousel from "@component/Carousel";
export default function Home() {

  const carouselProps = {
    title: "Demo title",
    description: "Demo description lorem ipsum",
    toggleScrollButtonPosition: true,
    hideIndicator: false,
    cardProps: [{
      image: "/arrowrightblack.svg",
      title: "Carousel Card Title",
      description: "Carousel Card Description",
      link: "/carousel-card-link",
      toggleButton: true,
      buttonText: "Learn More"
    }, {
      image: "/next.svg",
      title: "Carousel Card Title 2",
      description: "Carousel Card Description 2 askldfblasdbfalbfalfbalsdfbalksdbfalkbfalskhbflaksdbflkasdbflkasbflaksbfaslkdfbalwkdbflaksdhb",
      link: "/carousel-card-link",
      toggleButton: true,
      buttonText: "Learn More 2"
    }],
  };



  return (
    <div className={"container"}>
      <Hero introduction={["Internet can be a dangerous place,", "Do you sometimes worry"]} content={["About the online scams?", "We hear these worries a lot from our clients, parents, teenagers, and friends outside IT industry, we could go on and on. Security is difficult and people from all layers of security struggle with these questions."]} />
      <Shield top={95} left={1200} />
      <Carousel {...carouselProps} />
    </div>
  );
}
