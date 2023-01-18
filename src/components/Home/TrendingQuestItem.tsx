import React from "react";

type Quest = {
  image: any;
  title: string;
  status: "locked" | "open" | "completed";
};

function TrendingQuestItem({ image, title, status }: Quest) {
  return (
    <div className="w-[92%]  min-h-[70px] rounded-[20px] bg-bgCoverDark my-1 flex items-center justify-start pl-2 box-border">
      <img src={image} alt="" className="h-[60px] w-[60px] rounded-full mx-2" />
      <div className="w-[50%] h-[70%] flex flex-col items-start justify-evenly">
        <h1 className="text-[1rem] text-sideBarLink font-bold">{title}</h1>
        <h1 className="text-[0.7rem] text-sideBarLink font-light">{status}</h1>
      </div>
    </div>
  );
}

export default TrendingQuestItem;
