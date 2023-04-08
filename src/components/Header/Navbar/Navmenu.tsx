import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiChevronDown } from "react-icons/bi";

type Props = {
  options: string[];
  title: string;
};

export default function Navmenu({ options, title }: Props) {
  return (
    <Menu as="div" className="relative inline-block w-fit text-left z-50">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {title}
          <BiChevronDown
            className="ml-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 rounded-md bg-white shadow-lg focus:outline-none">
          <div className="px-1 py-1 w-full h-full">
            {options.map((option) => (
              <CustomMenuItem key={option} option={option} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

type CustomMenuItemProps = {
  option: string;
};

const CustomMenuItem = ({ option }: CustomMenuItemProps) => {
  return (
    <Menu.Item>
      <button
        className="hover:bg-gradient-to-r from-[#FFA500] to-[#FFD700] hover:text-white
      group text-left text-gray-700 flex w-full items-center rounded-md px-2 py-2 text-sm"
      >
        {option}
      </button>
    </Menu.Item>
  );
};
