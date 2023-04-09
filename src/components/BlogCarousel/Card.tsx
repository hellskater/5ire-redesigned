import { useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const Card: React.FC<{
  base: any;
  total: number;
  image: StaticImageData;
  index: number;
}> = ({ image, index, total, base }) => {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    [
      "0%",
      `${(index + 1) * -100}%`,
      `${total * 100 - (index + 1) * 100}%`,
      "0%",
    ]
  );
  const [straight, setStraight] = useState(false);

  const rotation = [-2, 1, -1, 2, -1, 1];

  return (
    <motion.li
      className="flex-none pr-24"
      style={{
        x,
      }}
      onMouseEnter={() => setStraight(true)}
      onMouseLeave={() => setStraight(false)}
    >
      <motion.figure
        className="flex-none rounded-xl overflow-hidden shadow-lg"
        initial={false}
        animate={
          straight
            ? { rotate: 0 }
            : { rotate: rotation[index % rotation.length] }
        }
      >
        <div className="relative w-80 h-52">
          <Image
            src={image}
            alt="blog"
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </motion.figure>
    </motion.li>
  );
};

export default Card;
