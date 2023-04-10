import { useEffect, useState } from "react";
import { Burger, Menu } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import Link from "next/link";

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

const menuItems = [
  { title: "About Us", options: aboutUsOptions },
  { title: "Testnet", options: testnetOptions },
  { title: "Community", options: communityOptions },
  { title: "Research", options: researchOptions },
  { title: "Validator", options: validatorOptions },
];
const NavMenu = () => {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState<any>(null);
  const ref = useClickOutside(() => setOpened(false));

  const classNames = {
    dropdown:
      "bg-gray-100 text-gray-800 border-0 h-fit w-full max-h-96 overflow-y-scroll pb-4 mt-2",
  };

  return (
    <Menu classNames={classNames} shadow="md" opened={opened}>
      <div ref={ref}>
        <Menu.Target>
          <Burger
            opened={opened}
            color="black"
            onClick={() => setOpened((o) => !o)}
            size="sm"
          />
        </Menu.Target>

        <Menu.Dropdown>
          {menuItems.map((val, index) => (
            <div
              className={`z-10 w-screen overflow-hidden text-sm ${
                active === index ? "h-fit" : "h-12"
              }`}
              key={val.title}
              onClick={() => {
                if (index === active) setActive(null);
                else setActive(index);
              }}
              onKeyDown={() => {
                if (index === active) setActive(null);
                else setActive(index);
              }}
              tabIndex={0}
              role="button"
            >
              <div className={`flex w-full items-center gap-1 px-4 pt-6`}>
                <p>{val.title}</p>
                {active === index ? (
                  <MdExpandLess size={25} />
                ) : (
                  <MdExpandMore size={25} />
                )}
              </div>

              <div className="mt-2 w-full bg-gray-100 p-4 text-xs">
                {val.options.map((option) => (
                  <Link href={option.link} key={option.link}>
                    <div className="flex flex-col gap-4">
                      <h2 className="pt-4 pb-1 text-gray-500">
                        {option.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Menu.Dropdown>
      </div>
    </Menu>
  );
};

export default NavMenu;
