import React from "react";

type Item = {
  title: string;
  value: string | number;
};

const FollowerSectionItem = ({ title, value }: Item) => {
  return (
    <div className="flex flex-col items-center justify-evenly h-[50%] sm:h-[90%] w-auto">
      <h1 className="text-sideBarLink font-light text-[0.8rem] sm:text-[1.1rem]">
        {title}
      </h1>
      <h1 className="text-sideBarLink font-medium text-[0.9rem] sm:text-[1.5rem]">
        {value}
      </h1>
    </div>
  );
};

export default FollowerSectionItem;
