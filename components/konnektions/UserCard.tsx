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
    <div className="text-white min-w-[160px]  w-[30%] max-h-[240px]  h-[100%] sm:min-w-[170px] sm:w-[180px] sm:max-h-[240px] bg-bgBlack1 rounded-xl p-3 box-border">
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
        <button className="Merge branch 'prototype1' into konnektionPagebg-gradient-to-r from-gradient1 to-gradient2 text-[0.7rem] text-black w-[45%] h-[22px] rounded-[5px] font-semibold mr-3">
          Follow
        </button>
        <div className="w-[45%] h-[23px] bg-gradient-to-r from-gradient1 to-gradient2 flex items-center justify-center rounded-md p-[1px] box-border">
          <button className="w-[100%] h-[100%] text-[0.7rem] bg-bgBlack1 rounded-[5px] text-white font-semibold ">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
