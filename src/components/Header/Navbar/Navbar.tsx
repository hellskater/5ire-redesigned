import Link from "next/link";
import Navmenu from "./Navmenu";

const aboutUsOptions = [
  { title: "About 5ire", link: "about" },
  { title: "Team", link: "#" },
  { title: "Blog", link: "#" },
  { title: "Road to Mainnet", link: "#" },
  { title: "News & Media", link: "#" },
];

const testnetOptions = [
  { title: "Testnet", link: "#" },
  { title: "Build To Earn", link: "#" },
  { title: "Documentation", link: "#" },
];

const communityOptions = [
  { title: "Community", link: "#" },
  { title: "5ire Ambassador", link: "#" },
  { title: "Partner with Us", link: "#" },
];

const researchOptions = [
  { title: "Research Papers", link: "#" },
  { title: "Whitepaper", link: "#" },
];

const validatorOptions = [{ title: "Become a Validator", link: "#" }];

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
