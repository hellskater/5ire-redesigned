import Lion from "../../assets/nfts/lion.png";
import Azuki from "../../assets/nfts/azuki.png";
import Gemesis from "../../assets/nfts/gemesis.png";
import Kitty from "../../assets/nfts/kitty.png";
import Monkey from "../../assets/nfts/monkey.png";
import Image from "next/image";

const NftShowCase = () => {
  return (
    <div className="relative min-h-screen mb-20 mt-20">
      <h1 className="text-center text-4xl w-[70%] mx-auto text-[#7038ff] font-bold">
        Let&rsquo;s recreate the NFT art eco-system in a sustainable way.
      </h1>
      <div className="absolute -bottom-20 left-0 -rotate-12">
        <div className="relative h-96 w-96">
          <Image
            src={Lion}
            alt="lion"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute -bottom-20 right-0 rotate-12">
        <div className="relative h-96 w-96">
          <Image
            src={Azuki}
            alt="azuki"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-1/3 left-1/3 rotate-12">
        <div className="relative h-96 w-96">
          <Image
            src={Gemesis}
            alt="gemesis"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-10 left-0">
        <div className="relative h-96 w-96">
          <Image
            src={Kitty}
            alt="kitty"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="absolute top-10 right-0 mirror">
        <div className="relative h-96 w-96">
          <Image
            src={Monkey}
            alt="monkey"
            fill
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NftShowCase;
