import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import SearchItem from "../components/home/SearchItem";
import TrendingQuestItem from "../components/home/TrendingQuestItem";
import Header from "../components/profile/Header";
import SharedPosts from "../components/profile/SharedPosts";
import { useAppStateContext } from "../context/contextProvider";
import DashboardLayout from "../layout/dashboard";

const Home: NextPage = () => {
  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // useEffect(() => {
  //   if (window) {
  //     alert(window.innerWidth);
  //   }
  // }, []);

  return (
    <DashboardLayout>
      <div className="w-[100%] lg1300:w-[80%]  h-[100vh] flex flex-col sm:flex-row items-start justify-between bg-white pb-16  sm:pb-0 box-border overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide pr-0 sm:pr-1 box-border">
          <Header logoShown />
          <div className="w-full min-h-[75px] flex flex-col items-center justify-center border-[1px] border-goldBorder bg-goldBg rounded-[20px] mt-2 mb-3 px-[8%]  box-border">
            <h1 className="self-start text-goldText font-extrabold text-[0.8rem] ">
              Beta warning!
            </h1>
            <p className="self-start text-[0.7rem] text-lightGold font-light my-1">
              Konnektr is still in the beta phase,things may break,please handle
              us with care.
            </p>
            <p className="self-start text-[0.7rem] font-light text-profileDesc leading-3">
              © 2022 konnektr Privacy Discord Donate Status Vote Feedback hanks
              GitHub▲ Powered by Vercel
            </p>
          </div>
          <div className="w-[99%] sticky h-auto sm:min-h-[50px] max-h-[128px] rounded-[25px] bg-bgCard flex flex-col items-center justify-evenly sm:justify-between py-2 sm:py-0 box-border mb-3">
            <div
              onClick={() => setIsModalVisible(true)}
              className="w-[95%] sm:w-full h-[40px] sm:h-[50px] rounded-[30px] bg-bgCard flex items-center justify-start"
            >
              {/* <FaSearch className="text-sideBarLink ml-4" size={20} /> */}
              <img
                src="/assets/svg/magicpen.svg"
                alt=""
                className="w-[25px] h-[25px] ml-5 mr-2"
              />
              <input
                placeholder="What's up"
                onFocus={() => setIsModalVisible(true)}
                type="text"
                className="h-[40px] sm:h-[50px] bg-transparent placeholder:text-sideBarLink placeholder:text-[1rem] placeholder:font-bold focus:border-none focus:outline-none pl-3 text-black text-[1rem]"
              />
            </div>
            {/* <div className="w-[93%] sm:w-[95%]  h-[45%] flex items-center justify-between gap-x-1 mt-4">
              <SearchItem name="Photo" image={"/assets/svg/gallery.svg"} />
              <SearchItem name="Video" image={"/assets/svg/videocircle.svg"} />
              <SearchItem name="Event" image={"/assets/svg/calendaredit.svg"} />
              <SearchItem name="Gif" image={"/assets/svg/gift.svg"} />
            </div> */}
          </div>
          <div className="w-full flex flex-col items-center justify-start ">
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              image={"/assets/images/web3Bharat.png"}
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              image={"/assets/images/web3Bharat.png"}
            />
          </div>
        </div>
        <section className=" hidden h-full w-[35%] min-w-[350px] lg:flex flex-col items-center justify-between ml-2 py-2 lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%] ">
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
            <button
              onClick={() => router.push("/messages")}
              className="w-[20%] min-w-[90px] h-[50px] rounded-[30px] flex items-center justify-center bg-bgDropDown"
            >
              <img
                src="/assets/svg/message.svg"
                alt=""
                className="h-[25px] w-[25px]"
              />
            </button>
          </div>
          <div className="mt-3 w-full h-[70%] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
            <h1 className="self-start ml-4 text-communityheading text-[1.35rem] font-bold mt-4 mb-2">
              Trending Quests
            </h1>
            {/* <div className="flex flex-col items-center justify-start w-full  "> */}
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"completed"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"open"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            <TrendingQuestItem
              title="Sign up Quest"
              image={"/assets/images/quest.png"}
              status={"locked"}
            />
            {/* </div> */}
          </div>
          <div className="w-full h-[70px] rounded-[20px] bg-bgCover flex items-center justify-between px-5 box-border my-2">
            <div className="w-[50%] h-full flex items-center justify-start">
              <img
                src="/assets/images/image.png"
                alt=""
                className="w-[39px] h-[50px] rounded-[30px] "
              />
              <h1 className="text-[1rem] text-sideBarLink font-bold ml-4 ">
                Messages
              </h1>
            </div>
            <img
              src="/assets/svg/newmsg.svg"
              alt=""
              className="w-[24px] h-[24px] "
            />
          </div>
        </section>
      </div>
      {isModalVisible && (
        <div className="fixed w-screen h-screen bg-profileDesc top-0 flex flex-col items-center justify-center">
          <div className="relative w-[50%] h-[30%] min-h-[220px] max-h-[230px] max-w-[650px] bg-white rounded-[30px] flex flex-col items-center justify-start overflow-hidden border-[3px] border-borderModal ">
            <div className="w-full h-[50px] border-b-[1px] border-b-line flex items-center justify-between px-5 box-border">
              <h1 className="text-[0.9rem] font-extrabold text-sideBarLink">
                Create Post
              </h1>
              <div
                onClick={() => setIsModalVisible(false)}
                className="w-[24px] h-[24px] rounded-full bg-bgCoverDark flex items-center justify-center"
              >
                <FaPlus className="text-gray-600 rotate-45" size={14} />
              </div>
            </div>
            <div className="w-full h-[130px] flex flex-col items-start justify-center">
              <textarea
                rows={5}
                style={{ resize: "none" }}
                className="w-full h-full placeholder:text-gray-400 placeholder:font-light placeholder:text-[0.9rem]  overflow-auto scrollbar-hide focus:outline-none pl-4 box-border pt-[8%]"
                placeholder="What's happening?"
              ></textarea>
            </div>
            <div className="w-full h-[50px] flex items-center justify-between px-5 box-border">
              <div className="w-[45%] h-full flex items-center justify-between">
                <img
                  src="/assets/svg/gallery.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
                <img
                  src="/assets/svg/videocircle.svg"
                  alt=""
                  className="w-[22px] h-[22px] "
                />
                <img
                  src="/assets/svg/calendaredit.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
                <img
                  src="/assets/svg/gift.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
                <img
                  src="/assets/svg/textbold.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
                <img
                  src="/assets/svg/textitalic.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
                <img
                  src="/assets/svg/textunderline.svg"
                  alt=""
                  className="w-[20px] h-[20px] "
                />
              </div>
              <button className="w-[90px] h-[33px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  ">
                <img
                  src="/assets/svg/magicpenwhite.svg"
                  alt=""
                  className="w-[22px] h-[22px]"
                />
                <h1 className="text-[0.9rem] text-white font-semibold mr-3 ">
                  Post
                </h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Home;
