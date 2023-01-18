import React from "react";

type item = {
  icon: any;
  title: any;
  onClick?: () => void;
};

const DrawerItems = ({ icon, title, onClick }: item) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-[20px] flex items-center justify-start gap-x-3 my-3"
    >
      {icon}
      <span className="font-poppins font-medium text-[0.95rem] text-sideBarLink">
        {title}
      </span>
    </div>
  );
};

export default DrawerItems;
