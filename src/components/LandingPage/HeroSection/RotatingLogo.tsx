import Logo from "../../../assets/5ireRedone.png";
import Crown from "../../../assets/crown.png";
import { motion } from "framer-motion";
import Image from "next/image";

const RotatingLogo = () => {
  return (
    <div className="relative flex justify-center items-center w-40 h-40">
      <img src={Logo.src} alt="logo" className="h-20 w-20 object-contain" />

      <motion.img
        src={Crown.src}
        alt="crown"
        className="w-full h-full object-contain absolute top-0 left-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default RotatingLogo;
