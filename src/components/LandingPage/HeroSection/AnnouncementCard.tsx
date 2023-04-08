import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  title: string;
  tag?: string;
  Icon: IconType;
  animateValue: number;
};

const AnnouncementCard = ({ title, tag, Icon, animateValue }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const content = () => {
    return (
      <>
        <Icon className="text-white text-9xl" />
        <h2 className="text-2xl text-gradient text-center font-bold tracking-wider">
          {title}
        </h2>
        <FiExternalLink className="absolute top-4 right-4 text-white text-2xl" />
        <span className="font-semibold text-lg absolute top-4 left-4">
          {tag}
        </span>
      </>
    );
  };

  if (isDesktop) {
    return (
      <motion.div
        className="moving-gradient gap-2 cursor-pointer relative h-80 w-60 flex-col text-white rounded-2xl p-5 flex justify-center items-center"
        animate={{
          y: [10, -animateValue, 10],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          repeatDelay: 0.5,
        }}
      >
        {content()}
      </motion.div>
    );
  } else {
    return (
      <div className="moving-gradient gap-2 cursor-pointer relative h-80 w-60 flex-col text-white rounded-2xl p-5 flex justify-center items-center">
        {content()}
      </div>
    );
  }
};

export default AnnouncementCard;
