import Image from "next/image";
import Hero from "@component/Hero";
import Shield from "@component/common/Shield";
import CardBox from "@component/cardBox";
import data from '../data.json'
export default function Home() {
  return (
    <div className={"container"}>
      <Hero introduction={["Internet can be a dangerous place,", "Do you sometimes worry"]} content={["About the online scams?", "We hear these worries a lot from our clients, parents, teenagers, and friends outside IT industry, we could go on and on. Security is difficult and people from all layers of security struggle with these questions."]} />
      <Shield top={95} left={1300} />
      <div style={{ padding: "160px", transform: "translateY(-50%)" }}>
        <CardBox
          title={data.introduction.title}
          description={data.introduction.description}
          image={data.introduction.image}
          iconPosition={data.introduction.image_position}
          buttonText={data.introduction.button_name}
          buttonIcon={data.introduction.button_icon}
        />
      </div>
      <div style={{ padding: "160px", display: "block", gap: "60px", transform: "translateY(-50%)" }}>
        <CardBox
          title={data.yourShield.title}
          description={data.yourShield.description}
          image={data.yourShield.image}
          iconPosition={data.yourShield.image_position}
          buttonText={data.yourShield.button_name}
          buttonIcon={data.yourShield.button_icon}
        />
        <CardBox
          title={data.jointheMovement.title}
          description={data.jointheMovement.description}
          image={data.jointheMovement.image}
          iconPosition={data.jointheMovement.image_position}
          buttonText={data.jointheMovement.button_name}
          buttonIcon={data.jointheMovement.button_icon}
        />
      </div>
    </div>
  );
}
