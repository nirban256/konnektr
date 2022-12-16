import React from "react";

type Community = {
  image: any;
  title: string;
};

function CommunityListItem({ image, title }: Community) {
  return (
    <div className="w-[92%]  min-h-[70px] rounded-[20px] bg-bgCoverDark my-1 flex items-center justify-start pl-2 box-border">
      <img src={image} alt="" className="h-[50px] w-[50px] rounded-full mx-2" />
      <h1 className="text-[1rem] text-sideBarLink font-semibold">{title}</h1>
    </div>
  );
}

export default CommunityListItem;
