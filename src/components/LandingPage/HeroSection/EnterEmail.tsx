import Scribble from "../../../assets/Scribble.webp";

const EnterEmail = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full px-2">
      <input
        type="text"
        placeholder="Enter your email address"
        className="w-full md:w-[50%] h-12 px-4 z-50 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-[#FFA500]"
      />

      <div className="relative">
        <button className="bg-gradient-to-r z-50 transition-all duration-300 hover:scale-105 from-[#FFA500] to-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] hover:text-white text-white font-bold text-2xl py-3 px-10 rounded-full">
          Get Started
        </button>
        <img
          src={Scribble.src}
          alt="arrow"
          className="w-full absolute -bottom-24 right-8 rotate-6"
        />
      </div>
    </div>
  );
};

export default EnterEmail;
