import React from "react";

type Header = {
  logoShown?: boolean;
};

const Header = ({ logoShown }: Header) => {
  return (
    <header className="flex lg:hidden w-full h-[8vh] items-center justify-between px-2 box-border mb-5">
      <img src="/assets/svg/logoLight.svg" alt="" className="" />
      {logoShown && (
        <h1 className="text-sideBarLink font-bold text-[1.5rem]">Konnektr</h1>
      )}
      <img
        src="/assets/images/image.png"
        alt=""
        className="w-[35px] h-[35px] rounded-full"
      />
    </header>
  );
};

export default Header;
