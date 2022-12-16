import React from "react";
import { useAppStateContext } from "../../context/contextProvider";
import styles from "./Message.module.css";

type Message = {
  isSenderCurrentUser: boolean;
};

function Message({ isSenderCurrentUser }: Message) {
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
      } relative  w-[50%] min-w-[270px] max-w-[275px] min-h-[65px] rounded-[10px] flex flex-col items-center justify-start duration-500`}
    >
      Hello
    </div>
  );
}

export default Message;
