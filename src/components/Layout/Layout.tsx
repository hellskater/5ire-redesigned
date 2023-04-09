import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { IconGradientEnabler } from "../IconGradientEnabler/IconGradientEnabler";

type props = {
  children: typeof React.Children | ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div
      className={`pb-safe relative h-fit min-h-screen w-full overflow-x-hidden`}
    >
      <IconGradientEnabler />
      <Header />
      <>{children}</>
    </div>
  );
};

export default Layout;
