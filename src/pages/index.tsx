import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import ConnectBtn from "../components/home/ConnectBtn";
import PostModal from "../components/home/PostModal";
import SearchItem from "../components/home/SearchItem";
import TrendingQuestItem from "../components/home/TrendingQuestItem";
import CallModal from "../components/messages/CallModal";
import Header from "../components/profile/Header";
import SharedPosts from "../components/profile/SharedPosts";
import { useAppStateContext } from "../context/contextProvider";
import { PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";
import DashboardLayout from "../layout/dashboard";

const Home: NextPage = () => {
  const {
    // @ts-ignore
    sidebarToggleCollapse,
  } = useAppStateContext();
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isloggedIn, setIsloggedIn] = useState<boolean>(false);
  const [isAlphamodalActive, setisAlphamodalActive] = useState<boolean>(true);

  const {data, isLoading, error} = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.Latest
    }
  },
  {
    // Don't refetch the user comes back
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })


  return (
    <DashboardLayout>
      <div className="w-[100%] lg1300:w-[100%]  h-[100vh] flex flex-col sm:flex-row items-start justify-between bg-white pb-16  sm:pb-0 box-border overflow-hidden">
        <div className="h-full w-full flex flex-col items-center justify-start overflow-y-scroll scrollbar-hide px-2 lg:px-0 box-border pt-3">
          <Header logoShown />
          {isAlphamodalActive && (
            <div className="relative w-[100%] lg:w-full min-h-[85px] lg:min-h-[60px] flex flex-col items-start justify-center border-[1px] border-goldBorder bg-goldBg rounded-[10px] mt-2 mb-3 px-[4%]  box-border">
              <FaPlus
                onClick={() => setisAlphamodalActive(false)}
                className="absolute top-2 right-2 text-goldText rotate-45"
                size={12}
              />
              <h1 className=" text-goldText font-extrabold text-[0.8rem] ">
                Alpha warning!
              </h1>
              <p className="text-[0.75rem] text-goldText font-light">
                Alpha warning ! Konnektr is still in the alpha phase,things may
                break,please handle us with care.
              </p>
            </div>
          )}
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
              onClick={() => router.push("/posts/1")}
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              onClick={() => router.push("/posts/1")}
              image="/assets/images/punk.png"
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              onClick={() => router.push("/posts/1")}
            />
            <SharedPosts
              name="Shivrajj"
              username="shivrx.lens"
              content="Hello guys, this is my peraonal portfolio website, i creating with html css and javascript. demo at , thank u . #webdev"
              onClick={() => router.push("/posts/1")}
              image="/assets/images/redhood.png"
            />
          </div>
        </div>
        <section className="relative hidden h-full w-[35%] min-w-[350px] lg:flex flex-col items-center justify-start ml-2 py-2 lg1100:mr-[1%] lg1200:mr-[1%] lg1300:mr-[2%] xl1400:mr-[10%] xl1500:mr-[16%] ">
          <div
            className={`w-full h-[60px] flex items-center ${
              isloggedIn ? "justify-between" : "justify-between"
            }`}
          >
            {true && (
              <div
                className={`w-[72.5%] ${
                  sidebarToggleCollapse ? "min-w-[200px]" : "min-w-[180px]"
                } h-[50px] rounded-[30px] flex items-center justify-start bg-bgDropDown text-black pl-6 box-border oveflow-hidden duration-500 border shadow`}
              >
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[85%] h-full text-black pl-3 bg-transparent placeholder:text-sideBarLink placeholder:font-bold focus:outline-none"
                />
              </div>
            )}
            {isloggedIn ? (
              <button className="w-[90px] h-[50px] rounded-[30px] flex items-center justify-evenly bg-gradient-to-r from-text_gradient1 to-text_gradient2  ">
                <img
                  src="/assets/svg/lens-white.svg"
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </button>
            ) : (
              <ConnectBtn />
            )}
          </div>
          <div className="mt-3 w-full h-[70%] bg-bgDropDown rounded-[30px] flex flex-col items-center overflow-y-scroll scrollbar-hide justify-start relative">
            <h1 className="self-start px-4 flex items-start justify-start bg-bgDropDown w-full text-center text-communityheading text-[1.35rem] font-bold pt-2 mb-2 sticky top-0">
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
          {/* <div className="w-full h-[70px] rounded-[20px] bg-bgCover flex items-center justify-between px-5 box-border my-2">
            <div className="w-[50%] h-full flex items-center justify-start">
              <img
                src="/assets/images/image.png"
                alt=""
                className="w-[38px] h-[50px] rounded-t-full rounded-b-full object-cover"
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
          </div> */}
          <CallModal
            className="absolute bottom-[10px] mb-2 z-[100]"
            status="Calling"
            mobile={true}
            name={"Shivrajj"}
            profileImage={"/assets/images/image.png"}
          />
        </section>
      </div>
      {isModalVisible && (
        <PostModal
          closeButtonClick={() => setIsModalVisible(false)}
          isLoggedIn={isloggedIn}
        />
      )}
    </DashboardLayout>
  );
};

export default Home;
