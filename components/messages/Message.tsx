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
          ? `self-start ${
              sidebarToggleCollapse ? "ml-[60%]" : "ml-[55%]"
            } bg-messageBg2 before:right-2 before:bg-messageBg2`
          : "self-start ml-4 bg-messageBg1  before:left-2 before:bg-messageBg1"
      } relative  w-[50%] min-w-[270px] max-w-[275px] min-h-[40px] h-auto rounded-[10px] flex flex-col items-start justify-start duration-500 p-[2%]`}
    >
      <p className="max-w-[95%] break-words text-[12px] leading-3">{message}</p>
    </div>
  );
};

export default Message;
