import { TextInput } from "@mantine/core";
import { NextPage } from "next";
import { LegacyRef, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Message from "../components/messages/Message";
import Header from "../components/profile/Header";
import { useAppStateContext } from "../context/contextProvider";
import DashBoardLayout from "../layout/dashboard";
import styles from "../components/messages/Message.module.css";
import ScrollToBottom from "react-scroll-to-bottom";
import CommunityCircle from "../components/messages/CommunityCircle";
import MessageBox from "../components/messages/messageBox";

const Messages = () => {
  const [Messages, setmessages] = useState<Array<any>>([]);
  const [msg, setmsg] = useState("");

  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();

  const sendMessage = () => {
    setmessages([
      ...Messages,
      {
        id: Messages.length.toString(),
        message: msg,
        sender: Messages.length % 2 == 0 ? "me" : "someone",
        receiver: "me",
        time: Date.now,
      },
    ]);
    setmsg("");
  };

  return (
    <DashBoardLayout>
      <div className="w-[100%] h-[100vh] flex flex-col sm:flex-row items-start justify-between bg-white pb-16 sm:pb-0 box-border overflow-hidden">
        <Header />
        <div className="h-full w-full sm:w-[68%] flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide pr-0 sm:pr-1 box-border">
          <div className="relative w-full h-[99vh] flex flex-col items-center justify-start bg-bgCover rounded-[25px] py-2 box-border">
            <div className="absolute z-[100] top-5 w-[95%] h-[10%] max-h-[65px] bg-white rounded-[10px] flex items-center justify-between px-2 box-border">
              <div className="flex items-center justify-start h-full">
                <img
                  src="/assets/images/image.png"
                  alt=""
                  className="sm:h-[50px] sm:w-[50px] "
                />
                <h1 className="text-[1rem] text-sideBarLink font-semibold ml-4">
                  Shivrajj
                </h1>
              </div>
              <div className="flex items-center justify-end h-full">
                <img
                  src="/assets/svg/callcalling.svg"
                  alt=""
                  className="sm:w-[25px] sm:h-[25px] "
                />
                <img
                  src="/assets/svg/video.svg"
                  alt=""
                  className="sm:w-[25px] sm:h-[25px] mx-6"
                />
              </div>
            </div>

            <ScrollToBottom
              initialScrollBehavior="smooth"
              scrollViewClassName="flex flex-col items-center w-full h-full box-border scrollbar-hide py-[10%]"
              className={`${styles.messages} w-full bg-transparent flex flex-col items-center  overflow-y-scroll scrollbar-hide pb-8  box-border`}
            >
              {Messages.sort().map((item) => (
                <Message
                  key={item.id}
                  isSenderCurrentUser={item.sender == "me"}
                  message={item.message}
                />
              ))}
            </ScrollToBottom>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="absolute z-[100] bottom-5 w-[97%] h-[10%] min-h-[50px] max-h-[60px] bg-white rounded-[10px] flex items-center justify-between px-2 box-border"
            >
              <div className="flex items-center justify-start h-full w-full">
                <img
                  src="/assets/svg/attach.svg"
                  alt=""
                  className="sm:h-[18px] sm:w-[18px] mx-3"
                />
                <input
                  placeholder="Message.."
                  type="text"
                  value={msg}
                  onChange={(e) => setmsg(e.target.value)}
                  className="h-full w-[80%] bg-white ml-2 placeholder:text-gray-400 placeholder:font-light focus:outline-none"
                />
              </div>
              <img
                src="/assets/svg/send.svg"
                alt=""
                className="sm:h-[25px] sm:w-[25px] mr-2 cursor-pointer"
                onClick={sendMessage}
              />
            </form>
          </div>
        </div>
        <section className=" hidden h-full w-[30%] min-w-[320px] sm:flex flex-col items-center justify-start">
          <div className="w-full h-[10%] flex items-center justify-between">
            <div
              className={`w-[70%] ${
                sidebarToggleCollapse ? "min-w-[200px]" : "min-w-[180px]"
              } h-[50px] rounded-[30px] flex items-center justify-start bg-bgDropDown text-black pl-3 box-border   oveflow-hidden  duration-500`}
            >
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="w-[85%] h-full text-black pl-3 bg-transparent placeholder:text-sideBarLink placeholder:font-bold focus:outline-none"
              />
            </div>
            <button className="w-[20%] min-w-[90px] h-[50px] rounded-[30px] flex items-center justify-center bg-bgDropDown">
              <img
                src="/assets/svg/message.svg"
                alt=""
                className="h-[25px] w-[25px]"
              />
            </button>
          </div>
          <div className="mt-3 w-full h-full bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
            <h1 className="self-start ml-4 text-communityheading text-[1.35rem] font-bold mt-4 mb-2">
              Your Communities
            </h1>
            <div className="w-full min-h-[10vh] flex items-center justify-start gap-x-2 overflow-x-scroll scrollbar-hide px-4 box-border">
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
            </div>
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
            <MessageBox />
          </div>
          {/* <div className="w-full h-[30vh] flex flex-col items-center justify-evenly border-[1px] border-goldBorder bg-goldBg rounded-[30px] mt-2 px-[8%] py-[3%] box-border">
            <h1 className="self-start text-goldText font-bold text-[1.1rem] mb-2">
              Beta warning!
            </h1>
            <p className="text-[0.8rem] text-lightGold font-light mt-1 mb-3 ">
              Konnektr is still in the beta phase,things may break,please handle
              us with care.
            </p>
            <p className="text-[0.9rem] font-semibold text-profileDesc">
              © 2022 konnektr Privacy Discord Donate Status Vote Feedback hanks
              GitHub▲ Powered by Vercel
            </p>
          </div> */}
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default Messages;
