import HandwrittenNumber from "@/components/Handwritten/HandwrittenNumber";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import BuildToEarnImage from "../../../assets/buildToEarn.svg";

const points = [
  "Top 10 dApps to receive an incentive after evaluation.",
  "An opportunity to earn rewards through our referral program and grants scheme.",
  "An incentivization scheme for dApps focused on sustainable development.",
  " Reduced gas fees for early adopters and the first 500 builders to receive a share of block rewards.",
];

const BuildToEarn = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <main className="flex md:min-h-[65vh] min-h-[140vh] relative items-center md:mt-48 text-white w-full justify-between p-5 md:p-10">
      <div className="gradient-bg-image absolute md:-top-48 -top-28 -left-40 w-[220rem] h-[32rem] z-[-1] -rotate-12" />

      <div className="md:w-[60%] flex flex-col justify-center items-start gap-5">
        <h1 className="text-2xl md:text-4xl font-bold">#BuildToEarn</h1>

        <div className="flex flex-col gap-5 mt-5">
          {points.map((point, index) => (
            <div key={index} className="flex gap-5">
              <div className="w-10">
                <HandwrittenNumber number={index + 1} />
              </div>

              <p className="mt-2 text-sm md:text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] h-80 -mb-28 relative hidden md:flex">
        <Image
          src={BuildToEarnImage}
          alt="build to earn"
          fill
          className="h-full w-full object-contain"
        />
      </div>

      {isDesktop && (
        <div className="absolute -top-32 left-20 animate-bounce">
          <div className="relative">
            <img
              src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Classic-Logo-PNG-Pic.png"
              alt="eth"
              className="h-32 w-32 object-contain"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/599/599503.png"
              alt="star"
              className="h-14 w-14 absolute -top-8 -left-6 object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default BuildToEarn;
