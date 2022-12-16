import { Image, Button } from "@mantine/core";
import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

type Props = {
  name: string;
  profileImageURL: string;
  description: string;
  isVerified: boolean;
};

const UserCard = ({
  name,
  profileImageURL,
  description,
  isVerified,
}: Props) => {
  return (
    <div className="text-white min-w-[170px]  w-[30%] max-h-[240px]  h-[100%] sm:min-w-[190px] sm:min-h-[245px] sm:w-[200px] sm:max-h-[250px] bg-bgCard rounded-[20px] p-[8px] box-border">
      <img
        src={profileImageURL}
        className="w-[100%]  h-[145px] sm:h-[160px] object-cover rounded-[15px]"
      />
      <div className="w-[100%] flex items-center -mb-1 ml-2">
        <h1 className="text-[0.93rem] font-bold text-sideBarLink">{name}</h1>
        {isVerified && <HiBadgeCheck className=" text-verifyIcon ml-1" />}
      </div>
      <span className="text-[0.75rem] text-CardDescription text-sideBarLink -mt-1 ml-2">
        {description}
      </span>
      <div className="flex w-[100%] items-center  justify-center mt-1 mb-2">
        <button className="bg-gradient-to-r min-w-[120px] sm:min-w-[145px] sm:max-w-[160px]  from-gradient1 to-gradient2 text-[0.7rem] text-sideBarLink w-[45%] h-[22px] rounded-[5px] font-semibold ">
          Konnekt
        </button>
      </div>
    </div>
  );
};

export default UserCard;
