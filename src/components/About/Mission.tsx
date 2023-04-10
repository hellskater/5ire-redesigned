import Image from "next/image";
import Ellipse from "../../assets/Ellipse.webp";
import Arrow1 from "../../assets/arrow1.webp";
import Arrow2 from "../../assets/arrow2.webp";
import Arrow3 from "../../assets/arrow3.webp";
import Arrow4 from "../../assets/arrow4.webp";
import Arrow5 from "../../assets/arrow5.webp";
import { RiGovernmentFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import DownSwirly from "../../assets/down-swirly.webp";
import { useMediaQuery } from "@mantine/hooks";
import { Indie_Flower } from "next/font/google";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const Mission = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="min-h-[100vh]">
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
        <div className="relative h-40 mx-auto">
          <Image
            src={Ellipse}
            alt="ellipse"
            fill
            className={`h-40 ${!isDesktop && "hidden"} w-40 object-contain`}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p
              className={`${indie.className} md:text-6xl text-4xl text-center`}
            >
              Our Mision?
            </p>
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
          className={`flex flex-col items-center ${indie.className} ${
            isDesktop
              ? "absolute -bottom-52 right-0 mt-32 p-10 w-80"
              : "mx-auto p-5"
          }`}
        >
          <p className="text-lg text-gray-500 text-center mt-4">
            Driving a shift towards a more conscious and responsible economy.
          </p>
        </section>

        <section
          className={` ${
            isDesktop
              ? "absolute -bottom-[18rem] right-60 mt-32 p-10 w-80"
              : "mx-auto p-5"
          } flex flex-col ${indie.className} items-center `}
        >
          <p className="text-lg text-gray-500 text-center mt-4">
            Incentivize businesses to prioritize both profit and sustainability.
          </p>
        </section>

        <section
          className={`  flex ${
            isDesktop
              ? "absolute -bottom-[20rem] left-60 mt-32 p-10 w-80"
              : "mx-auto p-5"
          } flex-col ${indie.className} items-center`}
        >
          <p className="text-lg text-gray-500 text-center mt-4">
            Promote sustainable development through a for-benefit paradigm and
            proof-of-benefit model.
          </p>
        </section>

        <section
          className={`  flex flex-col ${indie.className} items-center ${
            isDesktop
              ? "absolute -bottom-[8rem] left-10 mt-32 p-10 w-80"
              : "mx-auto p-5"
          }`}
        >
          <p className="text-lg text-gray-500 text-center mt-4">
            Empower self-governing decentralized companies.
          </p>
        </section>
      </section>
    </div>
  );
};

export default Mission;
