import Link from "next/link";
import Navmenu from "./Navmenu";

const aboutUsOptions = [
  "About 5ire",
  "Team",
  "Blog",
  "Road to Mainnet",
  "News & Media",
];

const testnetOptions = ["Testnet", "Build To Earn", "Documentation"];

const communityOptions = ["Community", "5ire Ambassador", "Partner with Us"];

const researchOptions = ["Research Papers", "Whitepaper"];

const validatorOptions = ["Become a Validator"];

const Navbar = () => {
  return (
    <nav className="space-x-3 hidden lg:flex">
      <Navmenu title="About Us" options={aboutUsOptions} />
      <Navmenu title="Testnet" options={testnetOptions} />
      <Navmenu title="Community" options={communityOptions} />
      <Navmenu title="Research" options={researchOptions} />
      <Navmenu title="Validator" options={validatorOptions} />
    </nav>
  );
};

export default Navbar;
