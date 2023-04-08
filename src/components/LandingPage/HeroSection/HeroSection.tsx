/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import GradientWave from "../../GradientWave/GradientWave";
import ThinStraightArrow from "../../../assets/ThinStraightArrow.webp";
import EnterEmail from "./EnterEmail";
import AnnouncementCard from "./AnnouncementCard";
import { SiVitest } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";

const HeroSection = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="min-h-[140vh] pb-20">
      {/* Gradient Animation */}

      {isDesktop && <GradientWave />}

      {/* Header */}
      <section className="md:mt-10 mt-16 ">
        <header className="flex flex-col items-center justify-center ">
          <p className="text-2xl md:text-4xl text-center font-bold font-mono md:text-white">
            BLOCKCHAIN MEETS
          </p>
          <div className="mt-2">
            <p className="text-4xl md:text-5xl text-gradient-hero  font-[900] tracking-wider">
              SUSTAINABILITY
            </p>
            <img
              src={ThinStraightArrow.src}
              alt="arrow"
              className="w-[60%] ml-auto"
            />
          </div>

          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/3412/3412024.png"
            alt="sustainability"
            className="w-40 h-40 mt-10 object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          <p className="text-center text-sm md:text-xl px-2 md:text-white font-semibold tracking md:w-[60%] mt-10">
            5ireChain is a layer-1 EVM compatible smart contract platform that
            focuses on developing a for-benefit blockchain ecosystem based on
            the Sustainable Development Goals (SDGs) defined by the United
            Nations (UN)
          </p>

          <div className="mt-10 w-full">
            <EnterEmail />
          </div>
        </header>
      </section>

      {/* Announcement Cards */}
      <section className="flex w-full flex-wrap justify-center gap-16 mt-48">
        <AnnouncementCard
          animateValue={27}
          title="Testnet Beta"
          tag="Live Now"
          Icon={SiVitest}
        />
        <AnnouncementCard
          title="5ire Documentation"
          Icon={HiOutlineDocumentText}
          animateValue={15}
        />
        <AnnouncementCard
          animateValue={38}
          title="Partner with Us"
          Icon={FaRegHandshake}
        />
      </section>
    </div>
  );
};

export default HeroSection;
