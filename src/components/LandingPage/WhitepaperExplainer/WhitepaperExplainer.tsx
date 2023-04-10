import Link from "next/link";

const WhitepaperExplainer = () => {
  return (
    <div className="relative w-full md:mb-[40rem] mb-[35rem]">
      <div className="flex z-50 absolute flex-col items-center justify-center text-center bg-gradient-to-tr from-blue-400 to-blue-600 px-5 py-20 w-[90%] left-1/2 -translate-x-1/2 rounded-3xl text-white">
        <p className="text-gray-200 text-lg">
          Read more about 5ire in the{" "}
          <Link
            className="underline underline-offset-4 hover:text-white"
            href="/about"
          >
            About Us
          </Link>{" "}
          page and our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-white"
            href="https://assets.website-files.com/6217c768b8b19637dc690fd8/6329e84d12e3aa52816b7e76_whitepaper_March%2022.pdf"
          >
            Whitepaper
          </a>
        </p>
        <p className="mt-3 font-semibold text-2xl">
          Feeling lazy? Take a look at the{" "}
          <Link
            className="underline underline-offset-4 hover:text-yellow-300 text-yellow-400 cursor-pointer"
            href="whitepaper-explainer"
          >
            Whitepaper Explainer
          </Link>{" "}
          which tries to simplify a couple of concepts from the Whitepaper.
        </p>
      </div>
    </div>
  );
};

export default WhitepaperExplainer;
