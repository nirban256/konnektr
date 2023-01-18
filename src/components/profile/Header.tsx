import Image from "next/image";
import React from "react";
import { useAppStateContext } from "../../context/contextProvider";

type Header = {
  logoShown?: boolean;
};

const Header = ({ logoShown }: Header) => {
  const {
    // @ts-ignore
    setIsDrawerOpen,
    // @ts-ignore
    isDrawerOpen,
  } = useAppStateContext();

  return (
    <header className="flex lg:hidden w-full h-[8vh] items-center justify-between px-2 box-border mb-5 mt-1">
      {/* <img src="/assets/svg/logoLight.svg" alt="" className="" /> */}
      <Image src={"/assets/svg/logoLight.svg"} alt="" height={30} width={30} />
      {logoShown && (
        <h1 className="text-sideBarLink font-bold text-[1.5rem]">Konnektr</h1>
      )}
      <Image
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        src={"/assets/images/image.png"}
        alt=""
        height={35}
        width={35}
        className=" rounded-full"
      />
    </header>
  );
};

export default Header;
