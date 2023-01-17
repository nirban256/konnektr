import { LegacyRef, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Message from "../../components/messages/Message";
import Header from "../../components/profile/Header";
import { useAppStateContext } from "../../context/contextProvider";
import DashBoardLayout from "../../layout/dashboard";
import styles from "../../components/messages/Message.module.css";
import ScrollToBottom from "react-scroll-to-bottom";
import CommunityCircle from "../../components/messages/CommunityCircle";
import MessageBox from "../../components/messages/messageBox";
import CallModal from "../../components/messages/CallModal";
import Image from "next/image";
import { Call, CallCalling, Video } from "iconsax-react";

const Messages = () => {
  const [Messages, setmessages] = useState<Array<any>>([]);
  const [msg, setmsg] = useState("");
  const [iscallStarted, setiscallStarted] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [speakerOn, setSpeakerOn] = useState<boolean>(false);
  const [isModalMinimized, setisModalMinimized] = useState<boolean>(false);

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
      <div className="w-[100%] h-[100vh] flex flex-col sm:flex-row items-center justify-start lg:items-start lg:justify-between bg-white pb-16 sm:pb-0 box-border overflow-hidden ">
        <Header />
        <div className="hidden lg:flex h-full w-full sm:w-[68%] flex-col items-center justify-start overflow-y-scroll scrollbar-hide pr-0 sm:pr-1 py-2 box-border">
          <div className="flex relative w-full h-[99vh] flex-col items-center justify-start bg-bgCover rounded-[25px] py-4 box-border">
            <div className=" w-[95%] h-[10%] max-h-[65px] bg-white rounded-[10px] flex items-center justify-between px-2 box-border">
              <div className="flex items-center justify-start h-full">
                <Image
                  height={40}
                  width={40}
                  className="rounded-full"
                  src={"/assets/images/image.png"}
                  alt={""}
                />
                <h1 className="text-[1rem] text-sideBarLink font-semibold ml-4">
                  Shivrajj
                </h1>
              </div>
              {!isModalMinimized ? (
                <div className="flex items-center justify-end h-full pr-4 box-border gap-x-5">
                  <CallCalling
                    onClick={() => setiscallStarted(true)}
                    size={"25"}
                    variant="Bold"
                    className="text-sideBarLink cursor-pointer"
                  />
                  <Video
                    onClick={() => setiscallStarted(true)}
                    size={"25"}
                    variant="Bold"
                    className="text-sideBarLink cursor-pointer"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setisModalMinimized(false)}
                  className="w-[90px] h-[30px] bg-callModalGradient2 rounded-[30px] flex items-center justify-center"
                >
                  <Call size="22" color="white" variant="Bold" className="" />
                  <h1 className=" text-white text-[0.9rem] font-medium ml-1">
                    Oncall
                  </h1>
                </button>
              )}
            </div>
            {iscallStarted && !isModalMinimized && (
              <CallModal
                onCancelButtonClick={() => setiscallStarted(false)}
                muted={muted}
                speakerOn={speakerOn}
                onMuteButtonClick={() => setMuted(!muted)}
                onSpeakerButtonClick={() => setSpeakerOn(!speakerOn)}
                className="absolute top-[75px] mb-2 z-[1000]"
                status="Calling"
                mobile={true}
                name={"Shivrajj"}
                profileImage={"/assets/images/image.png"}
                onMinimize={() => setisModalMinimized(true)}
              />
            )}
            <ScrollToBottom
              initialScrollBehavior="smooth"
              checkInterval={17}
              scrollViewClassName="relative flex flex-col items-center w-full h-full box-border scrollbar-hide py-2 pr-2"
              className={`${styles.messages} relative w-full bg-transparent flex flex-col items-center  overflow-y-scroll scrollbar-hide pb-8  box-border`}
            >
              {Messages.sort().map((item) => (
                <div className="w-full h-auto flex flex-col items-center justify-center my-2">
                  <Message
                    key={item.id}
                    isSenderCurrentUser={item.sender == "me"}
                    message={item.message}
                  />
                </div>
              ))}
            </ScrollToBottom>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className=" w-[97%] h-[10%] min-h-[50px] max-h-[60px] bg-white rounded-[10px] flex items-center justify-between px-2 box-border"
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
                  className="h-full w-[80%] bg-white ml-2 placeholder:text-gray-400 placeholder:font-light focus:outline-none text-black"
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
        <section className="  h-full w-full lg:w-[30%] lg:min-w-[320px] flex flex-col items-center justify-start lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%] px-1 lg:px-0 lg:pt-2 ">
          <div className="w-full h-[10%] flex items-center justify-between">
            <div
              className={`w-[100%] h-[50px] rounded-[30px] flex items-center justify-start bg-bgDropDown text-black pl-3 box-border   oveflow-hidden  duration-500`}
            >
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full text-black pl-3 bg-transparent placeholder:text-sideBarLink placeholder:font-bold focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-3 w-full h-full bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
            <h1 className="self-start px-4 flex items-start justify-start bg-bgDropDown w-full text-center text-communityheading text-[1.35rem] font-bold pt-2 mb-2 sticky top-0">
              Chats
            </h1>
            {/* <div className="w-full min-h-[10vh] flex items-center justify-start gap-x-2 overflow-x-scroll scrollbar-hide px-4 box-border">
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
              <CommunityCircle image={"/assets/svg/chainlink.svg"} />
            </div> */}
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
            <MessageBox lastMessage="Hey There.." title="Shivraj" id={1} />
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
