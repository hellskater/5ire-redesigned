import { useMediaQuery } from "@mantine/hooks";
import { Indie_Flower } from "next/font/google";
import Image from "next/image";
import Ellipse from "../assets/Ellipse.webp";
import Logo from "../assets/5ire.png";
import Swirly from "../assets/down-swirly.webp";
import Scribble from "../assets/Scribble.webp";
import Head from "next/head";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="min-h-[120vh] h-fit">
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {isDesktop && (
        <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-r rounded-full -rotate-2 from-blue-500 to-blue-600 z-[-2]"></div>
      )}

      <section className="flex justify-center items-center mt-32 relative">
        <p className={`${indie.className} md:text-6xl text-4xl text-center`}>
          Who are we?
        </p>

        <div className="absolute ">
          <div className="relative md:h-96 md:w-96 h-60 w-60">
            <Image
              src={Ellipse}
              alt="ellipse"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-32 flex flex-col gap-24 md:gap-0 md:flex-row items-center p-10">
        <div className="relative md:w-1/3 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Simple_Stick_Figure.svg/640px-Simple_Stick_Figure.svg.png"
            alt="human"
            className="h-96 w-96 object-contain"
          />

          <img
            src={Logo.src}
            alt="5ire logo"
            className="h-36 w-36 object-contain absolute top-6 left-1/2 -translate-x-1/2"
          />

          <img
            src={Scribble.src}
            alt="5ire logo"
            className="h-52 w-52 object-contain absolute -bottom-28 left-1/2 -translate-x-1/2"
          />
        </div>

        <div className="relative h-52 md:-rotate-90 md:w-1/3 w-full">
          <Image
            src={Swirly}
            alt="ellipse"
            fill
            className="h-full w-full object-contain"
          />
        </div>

        <div className="md:w-1/3">
          <p className={`${indie.className} text-base`}>
            Hey there, we&rsquo;re 5ire - the blockchain rebels with a cause!
            <br />
            <br />{" "}
            <span className="font-bold text-lg text-indigo-600">
              Our mission?
            </span>{" "}
            To revolutionize the way we think about the economy, by shifting
            from a profit-focused mindset to a benefit-driven one.
            <br />
            <br /> We embed sustainability and social impact at the heart of our
            fifth-generation layer-1 blockchain ecosystem, making it a powerful
            tool for building a better future.
            <br />
            <br /> We&rsquo;re a fast-growing unicorn in India, but our
            community of like-minded changemakers is spread far and wide.
            <br />
            <br /> Join us in our pursuit of economic and environmental
            sustainability - let&rsquo;s shake things up!
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
