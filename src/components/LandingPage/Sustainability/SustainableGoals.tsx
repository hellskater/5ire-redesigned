import Image from "next/image";
import Arrow1 from "../../../assets/arrow1.webp";
import Arrow2 from "../../../assets/arrow2.webp";
import Arrow3 from "../../../assets/arrow3.webp";
import Arrow4 from "../../../assets/arrow4.webp";
import Arrow5 from "../../../assets/arrow5.webp";

import { Indie_Flower } from "next/font/google";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const SustainableGoals = () => {
  return (
    <div className="absolute -top-32 -left-72 h-full w-full">
      <div className="h-full w-full text-gray-400 relative">
        <div className="absolute top-0 left-0 h-full w-full">
          <p className={`${indie.className} text-xl`}>
            Carbon-neutral transactions
          </p>
          <div className="relative h-32">
            <Image
              src={Arrow1}
              alt="arrow"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute -top-14 left-40 h-full w-full">
          <p className={` ${indie.className} text-xl`}>
            Reducing energy consumption
          </p>
          <div className="relative h-32">
            <Image
              src={Arrow2}
              alt="arrow"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute -top-32 left-96 h-full w-full">
          <p className={` ${indie.className} text-end text-xl`}>
            Facilitating sustainable supply chains
          </p>
          <div className="relative h-32">
            <Image
              src={Arrow3}
              alt="arrow"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute -top-14 left-[34rem] h-full w-full">
          <p className={` ${indie.className} text-end text-xl`}>
            Promoting transparency and accountability
          </p>
          <div className="relative h-32">
            <Image
              src={Arrow4}
              alt="arrow"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute top-10 left-[38rem] h-full w-full">
          <p className={` ${indie.className} mt-2 text-end text-xl`}>
            Supporting social impact projects
          </p>
          <div className="relative h-32">
            <Image
              src={Arrow5}
              alt="arrow"
              fill
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableGoals;
