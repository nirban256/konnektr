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
    <div className="text-white min-w-[150px]  w-[30%] max-h-[240px]  h-[100%] sm:min-w-[170px] sm:w-[180px] sm:max-h-[240px] bg-bgBlack1 rounded-xl p-3 box-border">
      <img
        src={profileImageURL}
        className="w-[100%] h-[145px] object-cover rounded-lg"
      />
      <div className="w-[100%] flex items-center -mb-1">
        <h1 className="text-CardTitle">{name}</h1>
        {isVerified ? (
          <HiBadgeCheck className=" text-verifyIcon ml-1" />
        ) : (
          <HiBadgeCheck className="text-gray-700 ml-1" />
        )}
      </div>
      <span className="text-CardDescription text-textGray -mt-1">
        {description}
      </span>
      <div className="flex w-[100%] items-center  justify-start mt-1 mb-2">
        <button className="bg-selectBorder text-[0.7rem] text-white w-[45%] h-[22px] rounded-md font-semibold mr-3">
          Follow
        </button>
        <button className="w-[45%] h-[22px] text-[0.7rem] bg-transparent border-[1px] border-white rounded-md font-semibold ">
          Invite
        </button>
      </div>
    </div>
  );
};

export default UserCard;
