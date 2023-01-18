import React from "react";

type tag = {
  name: string;
};

const Tag = ({ name }: tag) => {
  return (
    <div className="min-w-[65px] sm:min-w-[80px] h-[22px] sm:h-[30px] rounded-[100px] border-sideBarLink border-[1px] flex items-center justify-center  text-sideBarLink font-light text-[0.75rem] cursor-pointer">
      {name}
    </div>
  );
}

export default Tag;
