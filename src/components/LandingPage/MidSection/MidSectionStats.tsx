import Image from "next/image";
import MidSectionStatsImage from "../../../assets/MidSectionStats.svg";

const MidSectionStats = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-5 md:mt-96 mt-24 bg-black text-gray-300 py-20">
      <section className="relative h-96 w-full md:w-[60%]">
        <Image
          src={MidSectionStatsImage}
          alt="mid-section"
          fill
          className="h-full w-full object-contain"
        />
      </section>
      <section className="md:w-[40%] flex flex-col gap-5">
        <h2 className="text-white text-3xl font-bold">
          We’re a sustainability driven blockchain with reputation-based
          mechanisms.
        </h2>
        <p>
          In the near future, we aim to become an ecosystem focusing on positive
          impact.
        </p>
        <p>
          We also aim on making blockchain sustainable & accessible for{" "}
          <span className="text-yellow-500">1 billion+ people by 2030.</span>
        </p>
      </section>
    </div>
  );
};

export default MidSectionStats;
