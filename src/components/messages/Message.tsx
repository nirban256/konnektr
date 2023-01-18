import React from "react";
import { useAppStateContext } from "../../context/contextProvider";
import styles from "./Message.module.css";

type Message = {
  isSenderCurrentUser: boolean;
  message: string;
};

const Message = ({ isSenderCurrentUser, message }: Message) => {
  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();
  return (
    <div
      className={`${styles.message} ${
        isSenderCurrentUser
          ? `self-end  bg-messageBg2 before:right-2 before:bg-messageBg2`
          : "self-start ml-4 bg-messageBg1  before:left-2 before:bg-messageBg1"
      } relative  w-[50%] min-w-[270px] max-w-[275px] h-auto rounded-[10px] flex flex-col items-start justify-start duration-500 p-[10px] box-border`}
    >
      <span className="max-w-[95%] text-[1rem] break-words my-2 font-poppins">
        {message}
      </span>
      <div className="absolute bottom-0 w-[95%] h-[10px] bg-transparent mb-1 flex items-center justify-end gap-x-2 pr-2 box-border">
        <span className="text-[0.55rem] text-sideBarLink font-light ">
          11:20 PM
        </span>
        <span className="text-[0.55rem] text-sideBarLink font-light ">
          sent
        </span>
      </div>
    </div>
  );
};

export default Message;
