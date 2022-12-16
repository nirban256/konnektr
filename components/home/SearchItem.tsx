import React from "react";

type Item = {
  name: string;
  image: any;
};

function SearchItem({ image, name }: Item) {
  return (
    <div className="w-[65px] sm:w-[100px] h-[30px] sm:h-[32px] rounded-[25px] flex items-center justify-center bg-white">
      <img
        src={image}
        alt=""
        className="h-[15px] sm:h-[25px] w-[15px] sm:w-[25px] mr-[2px] sm:mr-[5px] "
      />
      <h1 className="text-sideBarLink font-light text-[0.75rem] sm:text-[0.9rem]">
        {name}
      </h1>
    </div>
  );
}

export default SearchItem;
