import Globe from "@/components/LandingPage/Sustainability/Globe/WrapGlobe";
import Image from "next/image";
import DownArrow from "../../../assets/BigDownArrow.webp";
import SustainableLogo from "../../../assets/sustainableLogo.png";
import InverseUnderline from "../../../assets/inverse-underline.svg";
import SustainableGoals from "./SustainableGoals";
import { useMediaQuery } from "@mantine/hooks";
import EVM from "../../../assets/evm.webp";
import FireCoin from "../../../assets/5ire.png";
import { motion } from "framer-motion";

const Sustainability = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <main className="text-gray-700 relative">
      <div className="relative w-fit mx-auto">
        {isDesktop && <SustainableGoals />}

        <h2 className="text-3xl md:text-6xl font-bold tracking-wider text-center">
          Sustainability
        </h2>
        <div className="relative h-10 w-full">
          <Image
            src={InverseUnderline}
            alt="sustainable-logo"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center md:p-10 p-5 mt-10">
        <h1 className="text-xl md:text-3xl font-semibold md:w-1/2">
          We want to play our <br />
          part in building a sustainable future and positively impacting <br />
          the planet.{" "}
        </h1>
        <div className="relative h-72 md:w-1/2 w-full mt-5">
          <Image
            src={SustainableLogo}
            alt="sustainable-logo"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      {/* Globe */}
      <section className="md:px-10 px-5 md:mt-32">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wider">
          Sustainable Development Goals (SDGs)
        </h2>
        <p className="text-sm md:text-base font-semibold text-gray-500 mt-10">
          5ire is already deploying real-world use cases to tackle these
          problems. Blockchain can provide solutions to many of the world’s
          pressing problems. 5ire is a blockchain ecosystem leading the pace in
          utilizing this technology to build a sustainable environment.
          Investors, governments, and sustainability advocates admire our
          holistic approach.
        </p>

        {isDesktop && <Globe />}

        <p className="text-base text-center md:text-lg font-semibold text-gray-700 mt-10">
          We consider our impact on people and the planet in everything we do.
          And we continue to ask ourselves how we can make our work an even
          greater force for good in the world.
        </p>
      </section>

      {/* Down arrow */}
      <div className="relative md:h-80 h-52 mt-20">
        <Image
          src={DownArrow}
          alt="down-arrow"
          fill
          className="h-full w-full object-contain"
        />
      </div>

      {isDesktop && (
        <>
          <div className="absolute bottom-0 right-0">
            <div className="relative h-96 w-96">
              <Image
                src={EVM}
                alt="evm"
                fill
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <motion.img
            src={FireCoin.src}
            alt="fire coin"
            className="w-40 h-40 absolute bottom-32 left-20 hue-rotate-180 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </>
      )}
    </main>
  );
};

export default Sustainability;
