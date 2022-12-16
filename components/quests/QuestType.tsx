import React from "react";

type QuestType = {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

function QuestType({ title, isActive, onClick }: QuestType) {
  return (
    <div
      onClick={onClick}
      className={`w-[80px] h-[38px] rounded-[30px] ${
        isActive ? "bg-tabActive" : "bg-bgCover"
      } flex items-center justify-center`}
    >
      <h1 className="text-sideBarLink font-medium text-[0.8rem]">{title}</h1>
    </div>
  );
}

export default QuestType;
