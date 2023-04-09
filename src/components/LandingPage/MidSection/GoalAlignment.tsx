import Image from "next/image";
import Ellipse from "../../../assets/Ellipse.webp";
import Arrow1 from "../../../assets/arrow1.webp";
import Arrow2 from "../../../assets/arrow2.webp";
import Arrow3 from "../../../assets/arrow3.webp";
import Arrow4 from "../../../assets/arrow4.webp";
import Arrow5 from "../../../assets/arrow5.webp";
import { RiGovernmentFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import DownSwirly from "../../../assets/down-swirly.webp";
import { useMediaQuery } from "@mantine/hooks";

const GoalAlignment = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="min-h-[70vh]">
      <div className="relative h-40">
        <Image
          src={DownSwirly}
          alt="down swirly arrow"
          fill
          className="h-full w-full object-contain"
        />
      </div>
      <section className="flex mt-14 justify-center">
        <h2 className="md:text-lg text-sm text-[#7038ff] md:w-[70%] p-5 md:p-0 font-semibold text-center">
          Our ultimate mission is to make it easy for businesses, governments,
          entrepreneurs, and institutions to incentivize sustainability. By
          aligning economic growth with global sustainability, we want to make
          it easy to be &rsquo;good&rsquo;.
        </h2>
      </section>

      <section className="mt-14 relative">
        <div className="relative h-36 mx-auto">
          <Image
            src={Ellipse}
            alt="ellipse"
            fill
            className={`h-36 ${!isDesktop && "hidden"} w-full object-contain`}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-20 w-40 bg-black rounded-full">
              <Image
                src="/logo.svg"
                alt="5ire logo"
                fill
                className="h-full w-full object-contain px-8"
              />
            </div>
          </div>
        </div>

        {isDesktop && (
          <>
            <div className="absolute -bottom-10 -right-60 rotate-180 h-full w-full">
              <div className="relative h-20">
                <Image
                  src={Arrow1}
                  alt="arrow"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-24 -right-40 rotate-180 h-full w-full">
              <div className="relative h-20">
                <Image
                  src={Arrow2}
                  alt="arrow"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-28 -right-10 rotate-180 h-full w-full">
              <div className="relative h-20">
                <Image
                  src={Arrow3}
                  alt="arrow"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-28 right-20 rotate-180 h-full w-full">
              <div className="relative h-20">
                <Image
                  src={Arrow4}
                  alt="arrow"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-16 right-48 rotate-180 h-full w-full">
              <div className="relative h-20">
                <Image
                  src={Arrow5}
                  alt="arrow"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </>
        )}

        <section
          className={`flex flex-col items-center ${
            isDesktop
              ? "absolute -bottom-96 right-0 mt-32 p-10 w-80"
              : "mx-auto p-5"
          }`}
        >
          <RiGovernmentFill
            style={{
              fill: "url(#default-gradient)",
            }}
            className="text-9xl"
          />
          <h2 className="text-3xl text-gray-700 font-bold text-center">
            Government
          </h2>
          <p className="text-sm text-gray-500 text-center mt-4">
            5ire provides a novel way for governments to engage with citizens
            and scale their capacities for effective administration with
            transparency, efficiency, and speed.
          </p>
        </section>

        <section
          className={` ${
            isDesktop
              ? "absolute -bottom-[32rem] right-60 mt-32 p-10 w-80"
              : "mx-auto p-5"
          } flex flex-col items-center `}
        >
          <BsBuildingsFill
            style={{
              fill: "url(#default-gradient)",
            }}
            className="text-9xl"
          />
          <h2 className="text-3xl text-gray-700 font-bold text-center mt-4">
            Fortune 500
          </h2>
          <p className="text-sm text-gray-500 text-center mt-4">
            Fortune 500 companies have a disproportionate impact on the future
            of the world&rsquo;s sustainability. By encoding SGDs and ESG in our
            blockchain, 5ire makes it easy for businesses to do good.
          </p>
        </section>

        <section
          className={`  flex ${
            isDesktop
              ? "absolute -bottom-[32rem] left-60 mt-32 p-10 w-80"
              : "mx-auto p-5"
          } flex-col items-center`}
        >
          <FaUserTie
            style={{
              fill: "url(#default-gradient)",
            }}
            className="text-9xl"
          />
          <h2 className="text-3xl text-gray-700 font-bold text-center mt-4">
            Social Entrepreneurs
          </h2>
          <p className="text-sm text-gray-500 text-center mt-4">
            5ire is fast, secure, and cheap. This makes us an ideal ecosystem
            for entrepreneurs who want to combine impact with business as they
            scale their mission.
          </p>
        </section>

        <section
          className={`  flex flex-col items-center ${
            isDesktop
              ? "absolute -bottom-[12rem] left-0 mt-32 p-10 w-80"
              : "mx-auto p-5"
          }`}
        >
          <FaGraduationCap
            style={{
              fill: "url(#default-gradient)",
            }}
            className="text-9xl"
          />
          <h2 className="text-3xl text-gray-700 font-bold text-center mt-4">
            Universities
          </h2>
          <p className="text-sm text-gray-500 text-center mt-4">
            5ire helps universities leverage the power of sustainability and
            make their administration and operations digitalized, real-time and
            transparent.
          </p>
        </section>
      </section>
    </div>
  );
};

export default GoalAlignment;
