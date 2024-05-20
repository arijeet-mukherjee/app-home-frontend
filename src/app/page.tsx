import Image from "next/image";
import Hero from "@component/Hero";
import Shield from "@component/common/Shield";
export default function Home() {


  return (
    <div className={"container"}>
      <Hero introduction={["Internet can be a dangerous place,", "Do you sometimes worry"]} content={["About the online scams?", "We hear these worries a lot from our clients, parents, teenagers, and friends outside IT industry, we could go on and on. Security is difficult and people from all layers of security struggle with these questions."]} />
      <Shield top={95} left={1200} />
    </div>
  );
}
