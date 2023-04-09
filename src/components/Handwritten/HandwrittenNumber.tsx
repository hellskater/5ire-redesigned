import Image from "next/image";
import CircleSmall from "../../assets/CircleSmall.webp";

import { Indie_Flower } from "next/font/google";

const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  number: number;
};

const HandwrittenNumber = ({ number }: Props) => {
  return (
    <div className="relative h-12 w-12">
      <Image
        src={CircleSmall}
        alt="circle"
        fill
        className="h-full w-full object-contain"
      />

      <p
        className={`text-2xl absolute
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ${indie.className} `}
      >
        {number}
      </p>
    </div>
  );
};

export default HandwrittenNumber;
