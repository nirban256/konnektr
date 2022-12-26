import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
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
          <div className="w-[99%] sticky h-auto sm:min-h-[120px] max-h-[128px] rounded-[25px] bg-bgCover flex flex-col items-center justify-evenly sm:justify-between py-2 sm:py-0 box-border mt-2">
            <div className="w-[95%] sm:w-full h-[40px] sm:h-[50px] rounded-[30px] bg-bgCoverDark flex items-center justify-start">
              <FaSearch className="text-sideBarLink ml-4" size={20} />
              <input
                placeholder="What's up"
                type="text"
                className="h-[40px] sm:h-[50px] bg-transparent placeholder:text-sideBarLink placeholder:text-[1rem] placeholder:font-bold focus:border-none focus:outline-none pl-3 text-black text-[1rem]"
              />
            </div>
            <div className="w-[93%] sm:w-[95%]  h-[45%] flex items-center justify-between gap-x-1 mt-4">
              <SearchItem name="Photo" image={"/assets/svg/gallery.svg"} />
              <SearchItem name="Video" image={"/assets/svg/videocircle.svg"} />
              <SearchItem name="Event" image={"/assets/svg/calendaredit.svg"} />
              <SearchItem name="Gif" image={"/assets/svg/gift.svg"} />
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-y-4">
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
        <section className=" hidden h-full w-[35%] min-w-[350px] lg:flex flex-col items-center justify-start lg1100:mr-[3%] lg1200:mr-[4%] lg1300:mr-[9%] xl1400:mr-[12%] xl1500:mr-[18%] ">
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
          <div className="mt-3 w-full h-[50vh] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start">
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
    </DashboardLayout>
  );
};

export default Home;
