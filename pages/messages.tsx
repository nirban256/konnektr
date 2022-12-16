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

const messages = [
  {
    id: "1",
    message: "Hello",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "2",
    message: "Haii",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "3",
    message: "how are you",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "4",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "5",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "6",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "7",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "8",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "9",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "10",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "11",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "12",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "13",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
  {
    id: "14",
    message: "Im fine",
    sender: "someone",
    receiver: "me",
    time: "",
  },
  {
    id: "15",
    message: "Im fine",
    sender: "me",
    receiver: "someone",
    time: "",
  },
];

const Messages: NextPage = () => {
  const [Messages, setmessages] = useState<any[]>([]);
  const [msg, setmsg] = useState("");
  const ref = useRef<HTMLDivElement | any>();

  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [msg, Messages.length]);

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
              scrollViewClassName="flex flex-col items-center w-full h-full box-border scrollbar-hide"
              className={`${styles.messages} w-full bg-transparent flex flex-col items-center  overflow-y-scroll scrollbar-hide pb-8  box-border`}
            >
              {Messages.sort().map((item) => (
                <Message
                  key={item.id}
                  isSenderCurrentUser={item.sender == "me"}
                />
              ))}
            </ScrollToBottom>
            <form className="absolute z-[100] bottom-5 w-[97%] h-[10%] min-h-[50px] max-h-[60px] bg-white rounded-[10px] flex items-center justify-between px-2 box-border">
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
                onClick={() => {
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
                }}
              />
            </form>
          </div>
        </div>
        <section className=" hidden h-full w-[30%] sm:flex flex-col items-center justify-start">
          <div className="w-full h-[10%] flex items-center justify-between">
            <TextInput
              sx={{ color: "white" }}
              variant="unstyled"
              className="rounded-lg"
              placeholder="Search"
              icon={<FaSearch className="text-sideBarLink ml-4" size={22} />}
              classNames={{
                input: `w-[70%] ${
                  sidebarToggleCollapse ? "min-w-[210px]" : "min-w-[180px]"
                } h-[50px] rounded-[30px] bg-bgDropDown text-black pl-5 placeholder:text-sideBarLink placeholder:font-bold  pl-[4vw] duration-500`,
              }}
            />
            <button className="w-[20%] min-w-[90px] h-[50px] rounded-[30px] flex items-center justify-center bg-bgDropDown">
              <img
                src="/assets/svg/message.svg"
                alt=""
                className="h-[25px] w-[25px]"
              />
            </button>
          </div>
          <div className="mt-3 w-full h-[50vh] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
            <h1 className="self-start ml-4 text-communityheading text-[1.35rem] font-bold mt-4 mb-2">
              Your Communities
            </h1>
            {/* <div className="flex flex-col items-center justify-start w-full  "> */}
            {/* <CommunityListItem
            title="Chainlink"
            image={"/assets/svg/chainlink.svg"}
          />
          <CommunityListItem
            title="Polygon"
            image={"/assets/svg/polygon.svg"}
          />
          <CommunityListItem
            title="Web3 Bharat"
            image={"/assets/images/web3Bharat.png"}
          />
          <CommunityListItem
            title="Build Space"
            image={"/assets/svg/buildspace.svg"}
          />
          <CommunityListItem
            title="Chainlink"
            image={"/assets/svg/chainlink.svg"}
          />
          <CommunityListItem
            title="Polygon"
            image={"/assets/svg/polygon.svg"}
          />
          <CommunityListItem
            title="Web3 Bharat"
            image={"/assets/images/web3Bharat.png"}
          />
          <CommunityListItem
            title="Build Space"
            image={"/assets/svg/buildspace.svg"}
          /> */}
            {/* </div> */}
          </div>
          <div className="w-full h-[30vh] flex flex-col items-center justify-evenly border-[1px] border-goldBorder bg-goldBg rounded-[30px] mt-2 px-[8%] py-[3%] box-border">
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
          </div>
        </section>
      </div>
    </DashBoardLayout>
  );
};

export default Messages;
