import React, { useState } from "react";
import { VolumeHigh, VolumeSlash, Call, ArrowUp2 } from "iconsax-react";
import Image from "next/image";

type modal = {
  status: "Calling" | "Ongoing" | "Speaker" | "Muted";
  mobile: boolean;
  profileImage: string;
  name: string;
  className?: string;
  onMuteButtonClick?: () => void;
  onSpeakerButtonClick?: () => void;
  onCancelButtonClick?: () => void;
  onMinimize?: () => void;
  muted?: boolean;
  speakerOn?: boolean;
};

const CallModal = ({
  status,
  mobile,
  profileImage,
  name,
  className,
  muted,
  onCancelButtonClick,
  onMuteButtonClick,
  onSpeakerButtonClick,
  onMinimize,
  speakerOn,
}: modal) => {
  return (
    <div
      className={`${className}  self-center w-[95%] h-[70px] bg-gradient-to-r from-callModalGradient1 to-callModalGradient2 rounded-[15px] flex items-center justify-between ${
        mobile ? "px-2" : "px-4 "
      } box-border `}
    >
      <div className="w-[40%] flex items-center justify-start ">
        <Image
          height={50}
          width={50}
          className="rounded-full"
          src={profileImage}
          alt={""}
        />

        <div className="flex flex-col items-start justify-evenly w-[20%] h-full ml-3">
          <h1 className="text-white text-[1.5rem] font-semibold">{name}</h1>
          <span className="text-white text-[0.9rem] font-light">
            {status}..
          </span>
        </div>
      </div>
      <div
        className={`${
          mobile ? "w-[50%]" : "w-[30%] "
        } relative h-full flex items-center justify-end gap-x-3 pr-5 box-border`}
      >
        <div
          onClick={onMuteButtonClick}
          className="w-[40px] h-[40px] flex items-center justify-center bg-[#8F8F8F] rounded-full cursor-pointer"
        >
          {muted ? (
            <VolumeHigh size="24" color="white" variant="Bold" />
          ) : (
            <VolumeSlash size="24" color="white" variant="Bold" />
          )}
        </div>
        <div
          onClick={onSpeakerButtonClick}
          className={`w-[40px] h-[40px] flex items-center justify-center ${
            speakerOn ? "bg-white" : "bg-[#8F8F8F]"
          } rounded-full cursor-pointer`}
        >
          <VolumeHigh
            size="24"
            color={speakerOn ? "black" : "white"}
            variant="Bold"
          />
        </div>
        <div
          className={`${
            mobile ? "w-[35px] h-[35px]" : "w-[40px] h-[40px]"
          }  flex items-center justify-center bg-[#FF3838] rounded-full cursor-pointer`}
        >
          <Call
            onClick={onCancelButtonClick}
            size="24"
            color="white"
            variant="Bold"
            className="rotate-[135deg] mt-1"
          />
        </div>
        <ArrowUp2
          onClick={onMinimize}
          color="white"
          size={"22"}
          variant="Linear"
          className="absolute top-[2px] right-[2px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CallModal;
