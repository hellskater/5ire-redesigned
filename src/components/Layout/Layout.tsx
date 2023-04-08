import React, { ReactNode } from "react";
import Header from "../Header/Header";

type props = {
  children: typeof React.Children | ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div
      className={`pb-safe relative h-fit min-h-screen w-full overflow-x-hidden`}
    >
      <Header />
      <>{children}</>
    </div>
  );
};

export default Layout;
