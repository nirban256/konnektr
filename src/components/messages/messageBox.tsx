import { useRouter } from "next/router";
import React from "react";

type Box = {
  onClick?: () => void;
  id?: number | string;
  title: string;
  lastMessage: string;
};

const MessageBox = ({ id, onClick, lastMessage, title }: Box) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={onClick}
        className="hidden w-[95%] min-h-[67px] bg-Cover rounded-[20px] bg-messageBox my-1 lg:flex items-center justify-start pl-2 box-border"
      >
        <div
          style={{ backgroundImage: "url(/assets/images/image.png)" }}
          className="relative h-[50px] w-[50px] rounded-full bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute bottom-[3px] right-[3px] bg-activeDot h-[9px] w-[9px] rounded-full "></span>
        </div>
        <div className="flex flex-col items-start justify-evenly ml-2">
          <h1 className="text-[1rem] font-semibold text-sideBarLink">
            {title}
          </h1>
          <span className="text-[0.8rem] font-light text-sideBarLink">
            {lastMessage}
          </span>
        </div>
      </div>
      <div
        onClick={() => router.push(`/messages/${id}`)}
        className=" w-[95%] min-h-[67px] bg-Cover rounded-[20px] bg-messageBox my-1 flex lg:hidden items-center justify-start pl-2 box-border"
      >
        <div
          style={{ backgroundImage: "url(/assets/images/image.png)" }}
          className="relative h-[50px] w-[50px] rounded-full bg-cover bg-center bg-no-repeat"
        >
          <span className="absolute bottom-[3px] right-[3px] bg-activeDot h-[9px] w-[9px] rounded-full "></span>
        </div>
        <div className="flex flex-col items-start justify-evenly ml-2">
          <h1 className="text-[1rem] font-semibold text-sideBarLink">
            Shivrajj
          </h1>
          <span className="text-[0.8rem] font-light text-sideBarLink">
            Hey there...
          </span>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
