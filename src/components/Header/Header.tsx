/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Scribble from "../../assets/Scribble.webp";
import { useMediaQuery } from "@mantine/hooks";
import HamburgerMenu from "./Navbar/HamburgerMenu";
import Link from "next/link";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header className="flex justify-center items-center gap-16 py-3 px-4 lg:px-16">
      {/* Logo */}
      <Link href="/">
        <div
          className={`relative
      ${!isDesktop && "bg-black"}
      w-28 lg:h-28 rounded-md h-10 lg:ml-20`}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            fill
            className="h-full p-2 w-full object-contain"
          />
        </div>
      </Link>

      <div className="flex items-center gap-5">
        {/* Navbar */}
        <Navbar />

        {/* Explorer Button */}

        <div className="flex items-center gap-2">
          <div className="relative">
            <button className="bg-gradient-to-r text-xs md:text-lg whitespace-nowrap shadow-lg from-[#FFA500] to-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-white text-white font-bold py-2 px-4 rounded-full">
              5ire Explorer
            </button>
            <img
              src={Scribble.src}
              alt="arrow"
              className="w-full absolute -bottom-16 -right-2"
            />
          </div>

          <div className="lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
