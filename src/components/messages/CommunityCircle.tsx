import React from "react";

type community = {
  image: any;
};

const CommunityCircle = ({ image }: community) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-[50px] min-w-[50px] rounded-full"
    ></div>
  );
};

export default CommunityCircle;
