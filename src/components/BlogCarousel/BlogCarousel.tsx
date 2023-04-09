import { animate, useMotionValue } from "framer-motion";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
import Blog1 from "../../assets/blog/1.png";
import Blog2 from "../../assets/blog/2.png";
import Blog3 from "../../assets/blog/3.png";
import Blog4 from "../../assets/blog/4.png";
import Blog5 from "../../assets/blog/5.png";
import Blog6 from "../../assets/blog/6.png";

import Antler from "../../assets/antler.png";
import LunarCrush from "../../assets/lunarcrush.png";

const images: StaticImageData[] = [Blog1, Blog2, Blog3, Blog4, Blog5, Blog6];

const BlogCarousel = () => {
  const x = useMotionValue(0);
  const { inView, ref: inViewRef } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });
  const [duration, setDuration] = useState(180);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const controls = animate(x, 400, {
      type: "tween",
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      // loop: Infinity
    });

    return controls.stop;
  }, [inView, x, duration]);

  let counter = 0;
  const total = images.length;

  return (
    <div className="flex flex-col py-16 ">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-5xl font-bold text-center">Technology Partners</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center mt-10 bg-black px-10 rounded-md md:rounded-full">
          <img
            src={Antler.src}
            className="md:w-40 w-32 h-20 object-contain"
            alt="antler"
          />
          <img
            className="md:w-40 w-32 h-20 object-contain"
            src={LunarCrush.src}
            alt="lunarcrush"
          />
        </div>
      </div>

      <div
        className="relative mt-10 flex-1 lg:flex-[2_2_0%]"
        ref={inViewRef}
        onMouseEnter={() => setDuration(280)}
        onMouseLeave={() => setDuration(180)}
      >
        <ul className="flex w-full items-center py-8">
          {images.map((image) => {
            return (
              <Card
                base={x}
                total={total}
                key={counter++}
                index={counter++}
                image={image}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogCarousel;
